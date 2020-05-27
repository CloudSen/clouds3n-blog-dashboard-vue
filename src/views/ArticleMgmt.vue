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
                              @change="onSelectTagChange"
                              chips
                              dense
                              label="文章标签"
                              multiple
                              v-model="editedItem.selectedTags"
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
                        @click="close"
                        color="blue darken-1"
                        text
                      >取消</v-btn>
                      <v-btn
                        @click="save"
                        color="blue darken-1"
                        text
                      >确认</v-btn>
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
                @click="initialize"
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
import axios from '@/utils/axiosConfig'

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
      {
        uuid: '1',
        title: 'Test1',
        createTime: '2019-07-29',
        updateTime: '2019-07-29',
      },
      {
        uuid: '2',
        title: 'Test2',
        createTime: '2019-07-30',
        updateTime: '2019-07-30',
      },
      {
        uuid: '3',
        title: 'Test3',
        createTime: '2019-08-01',
        updateTime: '2019-08-01',
      },
      {
        uuid: '4',
        title: 'Test4',
        createTime: '2020-05-16',
        updateTime: '2020-05-16',
      },
    ],
    options: {},
    conditionList: [],
    loading: false,
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
      selectedTags: [],
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
      selectedTags: [],
    },
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
        this.queryArticle().then((data) => {
          this.desserts = data.records
          this.loading = false
        }).catch((error) => console.error(`获取文章列表失败：${error}`))
      },
      deep: true,
    },
  },
  methods: {
    editItem (item) {
      const that = this
      this.editedIndex = this.desserts.indexOf(item)
      this.queryArticleDetail(item).then((data) => {
        that.editedItem = { ...that.editedItem, ...data }
        that.editedItem.tags.forEach((tag) => {
          that.editedItem.selectedTags.push(tag.value)
        })
        that.dialog = true
        that.loading = false
      })
    },
    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.dialogDel = true
    },
    close () {
      const that = this
      this.dialog = false
      this.dialogDel = false
      this.$nextTick(() => {
        that.editedItem = JSON.parse(JSON.stringify(that.defaultItem))
        that.editedIndex = -1
      })
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
    confirmDel () {
      this.desserts.splice(this.editedIndex, 1)
      this.close()
    },
    onSelectTagChange () {
      console.info(`tag list: ${JSON.stringify(this.editedItem.tags)}`)
      console.info(`selected tag list: ${JSON.stringify(this.editedItem.selectedTags)}`)
    },
    async queryArticle () {
      this.loading = true
      const conditionPage = dataTableOptionsToPaginationDto(this.options, this.conditionList)
      const { data } = await axios.post(articleMgmtUrl.query.queryPage, conditionPage)
      return data
    },
    async queryArticleDetail (item) {
      this.loading = true
      const { data } = await axios.get(`${articleMgmtUrl.query.getArticleDetail}${item.uuid}`)
      const newTags = []
      data.tags.forEach((tag) => newTags.push({ text: tag.name, value: tag.uuid }))
      data.tags = newTags
      return data
    },
  },
}
</script>

<style>
</style>
