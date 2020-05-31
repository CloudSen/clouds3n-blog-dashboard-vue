<template>
  <fragment>
    <v-container>
      <v-row class="fill-height">
        <v-col cols="12">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :loading="loading"
            :options.sync="options"
            :server-items-length="totalDesserts"
            class="elevation-1"
            sort-by="createTime"
          >
            <template v-slot:top>
              <v-toolbar
                color="white"
                flat
              >
                <v-toolbar-title>文章管理</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-dialog
                  max-width="1000px"
                  v-model="dialog"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn
                      class="mb-2"
                      color="primary"
                      dark
                      v-on="on"
                    >
                      <v-icon
                        class="mr-1"
                        dark
                      >add_circle</v-icon>新增
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col
                            cols="12"
                            md="4"
                            sm="6"
                          >
                            <v-text-field
                              label="文章标题"
                              v-model="editedItem.title"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            md="4"
                            sm="6"
                          >
                            <v-text-field
                              label="文章摘要"
                              v-model="editedItem.summary"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            md="4"
                            sm="6"
                          >
                            <v-text-field
                              label="卡片预览图片"
                              v-model="editedItem.imgUrlMd"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            md="4"
                            sm="6"
                          >
                            <v-text-field
                              label="文章详情大图"
                              v-model="editedItem.imgUrl"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            md="4"
                            sm="6"
                          >
                            <v-text-field
                              label="卡片颜色"
                              v-model="editedItem.color"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            md="4"
                            sm="6"
                          >
                            <v-text-field
                              label="卡片文字颜色"
                              v-model="editedItem.summaryTextColor"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            md="4"
                            sm="6"
                          >
                            <v-select
                              :items="editedItem.tags"
                              :loading="loadingTags"
                              @click="onSelectTagClick"
                              chips
                              dense
                              label="文章标签"
                              multiple
                              v-model="editedItem.selectedTags"
                            ></v-select>
                          </v-col>
                          <v-col
                            cols="12"
                            md="4"
                            sm="6"
                          >
                            <v-select
                              :items="editedItem.topics"
                              :loading="loadingTopics"
                              @click="onSelectTopicClick"
                              chips
                              dense
                              label="专题"
                              multiple
                              v-model="editedItem.selectedTopics"
                            ></v-select>
                          </v-col>
                          <v-col cols="12">
                            <v-textarea
                              auto-grow
                              label="文章内容"
                              placeholder="请写入MD风格的文章内容"
                              rows="10"
                              v-model="editedItem.content"
                            ></v-textarea>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        :loading="saveLoading"
                        @click="close"
                        color="blue darken-1"
                        text
                      >取消</v-btn>
                      <v-btn
                        :loading="saveLoading"
                        @click="save"
                        color="blue darken-1"
                        text
                      >保存</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog
                  max-width="1000px"
                  v-model="dialogDel"
                >
                  <v-card>
                    <v-card-title>
                      <span class="headline red--text">删除</span>
                    </v-card-title>

                    <v-card-text class="text-center">确认删除？</v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        @click="close"
                        color="blue darken-1"
                        text
                      >取消</v-btn>
                      <v-btn
                        @click="confirmDel"
                        color="red darken-1"
                        text
                      >确认</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                @click="editItem(item)"
                class="mr-2"
                small
              >mdi-pencil</v-icon>
              <v-icon
                @click="deleteItem(item)"
                small
              >mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn
                @click="refresh"
                color="primary"
              >刷新</v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
import { dataTableOptionsToPaginationDto } from '@/utils/transferUtil'
import articleMgmtUrl from '@/api/articleMgmtUrl'
import topicMgmtUrl from '@/api/topicMgmtUrl'
import tagMgmtUrl from '@/api/tagMgmtUrl'
import axios from '@/utils/axiosConfig'
import { parseCurrentDataTime } from '@/utils/dateTimeUtil'

export default {
  name: 'article-mgmt',
  data: () => ({
    headers: [
      {
        text: '文章标题',
        align: 'center',
        sortable: false,
        value: 'title',
      },
      {
        text: '创建时间',
        align: 'center',
        value: 'createTime',
      },
      {
        text: '更新时间',
        align: 'center',
        value: 'updateTime',
      },
      {
        text: '操作',
        value: 'actions',
        sortable: false,
      },
    ],
    desserts: [
    ],
    options: {},
    conditionList: [],
    loading: false,
    loadingTags: false,
    loadingTopics: false,
    saveLoading: false,
    dialog: false,
    dialogDel: false,
    editedIndex: -1,
    editedItem: {
      uuid: '',
      title: '',
      summary: '',
      imgUrlMd: '',
      imgUrl: '',
      color: '',
      summaryTextColor: '',
      content: '',
      tags: [],
      topics: [],
      selectedTags: [],
      selectedTopics: [],
    },
    defaultItem: {
      uuid: '',
      title: '',
      summary: '',
      imgUrlMd: '',
      imgUrl: '',
      color: '',
      summaryTextColor: '',
      content: '',
      tags: [],
      topics: [],
      selectedTags: [],
      selectedTopics: [],
    },
    needDelItemId: '',
    totalDesserts: 0,
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '新增' : '编辑'
    },
  },
  watch: {
    dialog (val) {
      if (!val) {
        this.close()
      }
    },
    dialogDel (val) {
      if (!val) {
        this.close()
      }
    },
    options: {
      handler (newOpt, oldOpt) {
        console.log(`new option: ${JSON.stringify(newOpt)}, old option: ${JSON.stringify(oldOpt)}`)
        this.refresh()
      },
      deep: true,
    },
  },
  methods: {
    reset () {
      this.dialog = false
      this.dialogDel = false
      this.loading = false
      this.loadingTags = false
      this.loadingTopics = false
      this.saveLoading = false
      this.needDelItemId = ''
    },
    refresh () {
      this.queryArticle().then((data) => {
        this.desserts = data.records
        this.totalDesserts = data.total
        this.reset()
      }).catch((error) => console.error(`获取文章列表失败：\n${error.msg}`))
    },
    editItem (item) {
      const that = this
      this.editedIndex = this.desserts.indexOf(item)
      this.queryArticleDetail(item).then(() => {
        that.dialog = true
        that.loading = false
      })
    },
    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.dialogDel = true
      this.needDelItemId = item.uuid
    },
    close () {
      const that = this
      this.reset()
      this.$nextTick(() => {
        that.editedItem = JSON.parse(JSON.stringify(that.defaultItem))
        that.editedIndex = -1
      })
    },
    save () {
      this.modifyArticle().then(() => {
        this.saveLoading = false
        this.close()
        this.refresh()
      })
    },
    confirmDel () {
      this.deleteArticle().then(() => {
        this.close()
        this.loading = true
        this.refresh()
      })
    },
    onSelectTagClick () {
      this.queryAllTag().then((data) => {
        this.editedItem.tags = []
        data.forEach((tag) => this.editedItem.tags.push({ text: tag.name, value: tag.uuid }))
        this.loadingTags = false
      })
    },
    onSelectTopicClick () {
      this.querySubTopics().then((data) => {
        this.editedItem.topics = []
        data.forEach((topic) => this.editedItem.topics.push({ text: topic.topicName, value: topic.uuid }))
        this.loadingTopics = false
      })
    },
    async queryArticle () {
      this.loading = true
      const conditionPage = dataTableOptionsToPaginationDto(this.options, this.conditionList)
      const { data } = await axios.post(articleMgmtUrl.query.queryPage, conditionPage)
      data.records.forEach((article) => {
        const temp = article
        temp.updateTime = parseCurrentDataTime(article.updateTime)
        temp.createTime = parseCurrentDataTime(article.createTime)
      })
      return data
    },
    async queryArticleDetail (item) {
      this.loading = true
      const newAllTags = []
      const newSubTopics = []
      const newSelectedTags = []
      const newSelectedTopics = []
      const tagResult = await axios.get(tagMgmtUrl.query.getAllTagList)
      const topicResult = await axios.get(topicMgmtUrl.query.getSubTopicList)
      tagResult.data.forEach((tag) => newAllTags.push({ text: tag.name, value: tag.uuid }))
      topicResult.data.forEach((topic) => newSubTopics.push({ text: topic.topicName, value: topic.uuid }))
      const { data } = await axios.get(`${articleMgmtUrl.query.getArticleDetail}${item.uuid}`)
      data.tags.forEach((tag) => newSelectedTags.push(tag.uuid))
      data.topics.forEach((topic) => newSelectedTopics.push(topic.uuid))
      this.editedItem = { ...this.editedItem, ...data }
      this.editedItem.tags = newAllTags
      this.editedItem.topics = newSubTopics
      this.editedItem.selectedTags = newSelectedTags
      this.editedItem.selectedTopics = newSelectedTopics
    },
    async queryAllTag () {
      this.loadingTags = true
      const { data } = await axios.get(tagMgmtUrl.query.getAllTagList)
      return data
    },
    async querySubTopics () {
      this.loadingTopics = true
      const { data } = await axios.get(topicMgmtUrl.query.getSubTopicList)
      return data
    },
    async modifyArticle () {
      this.saveLoading = true
      const articleData = JSON.parse(JSON.stringify(this.editedItem))
      const newTagList = []
      const newTopicList = []
      articleData.selectedTags.forEach((tagId) => {
        newTagList.push({ uuid: tagId })
      })
      articleData.selectedTopics.forEach((topicId) => {
        newTopicList.push({ uuid: topicId })
      })
      articleData.tags = newTagList
      articleData.topics = newTopicList
      await axios.post(articleMgmtUrl.modify.saveOrUpdate, articleData).catch((err) => {
        console.error(JSON.stringify(err))
      })
    },
    async deleteArticle () {
      this.loading = true
      await axios.delete(`${articleMgmtUrl.delete.deleteArticle}${this.needDelItemId}`).catch((err) => {
        console.error(JSON.stringify(err))
      })
    },
  },
}
</script>

<style>
</style>
