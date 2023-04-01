<script>
// 套件(Axios)
import axios from "axios";

// 組件
import InfoMenuExplore from "@/components/Global/InfoMenuExplore.vue";

// Vue 方法
import { onMounted, reactive, ref } from "vue";
import Loading from "@/components/Global/Loading.vue";

export default {
  components: { InfoMenuExplore, Loading },
  setup() {
    const loading = ref(true); // false完成

    // 所有活動
    const activityList = reactive({ data: [] });

    const content = reactive({ data: [] });

    // -------------- 取得資料(axios) ---------------
    // 所有活動
    onMounted(() => {
      axios
        .get("https://oceandemo.herokuapp.com/MySpringBoot/findAllActivity")
        .then((response) => {
          // console.log(response.data);
          activityList.data = response.data.filter(function (e) {
            return e.activityStatus === "上架";
          });

          loading.value = false;
        });
    });

    // 斷行格式
    const textReplace = (str) => {
      // console.log(str);
      str.replace(/<br>/g, "\n");
      // console.log(str.replace(/<br>/g, "\n"));
      return str.replace(/<br>/g, "\n");
    };
    // console.log(textReplace);

    return { activityList, content, textReplace, loading };
  },
};
</script>

<template>
  <main class="activity">
    <div class="bg">
      <InfoMenuExplore />
    </div>

    <section v-if="loading" class="loading">
      <Loading />
    </section>
    <section v-else>
      <div
        class="bgList"
        v-for="(item, index) in activityList.data"
        :key="item.activityID"
      >
        <div class="containerMain">
          <div
            class="showInfoBox"
            :class="{ showEven: index % 2 == 1 }"
            data-aos="fade-up"
          >
            <!-- {{ index }} -->
            <div class="showInfo">
              <h3>{{ item.activityTitle }}</h3>

              <p style="white-space: pre-wrap">
                {{ textReplace(item.activityContent) }}
              </p>
              <table class="showTable">
                <tbody>
                  <tr>
                    <th>表演日期</th>
                    <td>{{ item.activityDate }}</td>
                  </tr>
                  <tr>
                    <th>表演時間</th>
                    <td>{{ item.activityTime }}</td>
                  </tr>
                </tbody>
              </table>
              <p
                style="white-space: pre-wrap"
                class="noticeText"
                v-if="item.activityRemark !== ''"
              >
                {{ textReplace(item.activityRemark) }}
              </p>
            </div>
            <div class="showImg">
              <img
                :src="'data:image/png;base64,' + item.activityImg"
                :alt="item.activityTitle"
              />
            </div>
            <h3 class="rwdTitle">{{ item.activityTitle }}</h3>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/activity/_activity.scss"
  scoped
></style>
