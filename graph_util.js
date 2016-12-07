import * as d3 from 'd3';

export const setUpGraph = function(handleClick) {

  var treeJson = {"name": "Babe Ruth", "children": [{"team_id": "594", "children": [{"team_id": "577", "children": [{"team_id": "490"}, {"team_id": "519"}, {"team_id": "595"}, {"team_id": "470"}, {"team_id": "486"}, {"team_id": "605"}, {"team_id": "417"}, {"team_id": "448", "children": [{"team_id": "242"}, {"team_id": "246"}]}, {"team_id": "464"}, {"team_id": "506"}, {"team_id": "655"}, {"team_id": "480"}]}, {"team_id": "700", "children": [{"team_id": "634"}, {"team_id": "652"}, {"team_id": "668"}, {"team_id": "684"}, {"team_id": "441", "children": [{"team_id": "79", "children": [{"team_id": "55"}, {"team_id": "63"}, {"team_id": "13"}, {"team_id": "51"}, {"team_id": "6"}, {"team_id": "32"}, {"team_id": "12"}, {"team_id": "27"}, {"team_id": "24"}, {"team_id": "36"}]}, {"team_id": "88", "children": [{"team_id": "35"}]}, {"team_id": "96"}, {"team_id": "110"}, {"team_id": "127"}, {"team_id": "180"}, {"team_id": "197"}, {"team_id": "225"}, {"team_id": "245"}, {"team_id": "25", "children": [{"team_id": "2"}, {"team_id": "14"}]}, {"team_id": "33"}, {"team_id": "40"}, {"team_id": "52", "children": [{"team_id": "48"}]}, {"team_id": "66"}, {"team_id": "77", "children": [{"team_id": "5"}, {"team_id": "9"}]}, {"team_id": "81"}, {"team_id": "167"}, {"team_id": "200"}, {"team_id": "217"}, {"team_id": "233"}, {"team_id": "254"}, {"team_id": "86"}, {"team_id": "159"}, {"team_id": "16", "children": [{"team_id": "26"}]}, {"team_id": "60"}, {"team_id": "183"}, {"team_id": "275"}]}, {"team_id": "457"}, {"team_id": "473"}, {"team_id": "639"}, {"team_id": "455"}, {"team_id": "471"}, {"team_id": "487"}, {"team_id": "503"}, {"team_id": "528"}, {"team_id": "547"}, {"team_id": "540"}, {"team_id": "556"}, {"team_id": "629"}, {"team_id": "854"}, {"team_id": "591", "children": [{"team_id": "333"}]}, {"team_id": "812"}, {"team_id": "425"}, {"team_id": "620"}, {"team_id": "516"}, {"team_id": "606"}]}, {"team_id": "465", "children": [{"team_id": "484"}, {"team_id": "319", "children": [{"team_id": "154"}, {"team_id": "170"}, {"team_id": "231"}, {"team_id": "295"}, {"team_id": "132"}, {"team_id": "162"}, {"team_id": "261"}, {"team_id": "177"}, {"team_id": "193"}, {"team_id": "209"}, {"team_id": "191"}, {"team_id": "223"}, {"team_id": "283"}, {"team_id": "151"}, {"team_id": "207"}]}, {"team_id": "323", "children": [{"team_id": "262"}, {"team_id": "192"}, {"team_id": "239"}, {"team_id": "83"}, {"team_id": "91"}, {"team_id": "100"}, {"team_id": "114"}, {"team_id": "138"}, {"team_id": "174"}, {"team_id": "189"}, {"team_id": "198"}, {"team_id": "230"}, {"team_id": "265"}, {"team_id": "220"}, {"team_id": "108"}, {"team_id": "133"}, {"team_id": "163"}, {"team_id": "178"}, {"team_id": "278"}, {"team_id": "202"}, {"team_id": "218"}, {"team_id": "75"}, {"team_id": "135"}, {"team_id": "214"}, {"team_id": "113"}, {"team_id": "263"}]}, {"team_id": "331", "children": [{"team_id": "274"}, {"team_id": "215"}, {"team_id": "272"}]}, {"team_id": "355"}, {"team_id": "367", "children": [{"team_id": "238"}]}, {"team_id": "378", "children": [{"team_id": "148"}, {"team_id": "147"}]}, {"team_id": "386", "children": [{"team_id": "141", "children": [{"team_id": "23"}]}, {"team_id": "160"}, {"team_id": "134"}]}, {"team_id": "433"}, {"team_id": "491"}, {"team_id": "334", "children": [{"team_id": "253"}, {"team_id": "182"}, {"team_id": "227"}, {"team_id": "185"}, {"team_id": "195"}, {"team_id": "139"}, {"team_id": "184"}, {"team_id": "251"}]}, {"team_id": "346"}, {"team_id": "375", "children": [{"team_id": "199"}, {"team_id": "234"}, {"team_id": "257"}, {"team_id": "289"}, {"team_id": "301"}, {"team_id": "216"}]}, {"team_id": "384", "children": [{"team_id": "255"}, {"team_id": "240"}, {"team_id": "153"}]}, {"team_id": "526"}, {"team_id": "364", "children": [{"team_id": "258"}, {"team_id": "97"}, {"team_id": "136"}, {"team_id": "172"}, {"team_id": "187"}, {"team_id": "204"}, {"team_id": "201"}, {"team_id": "115"}, {"team_id": "190"}]}, {"team_id": "388", "children": [{"team_id": "179"}, {"team_id": "229"}, {"team_id": "327"}]}, {"team_id": "494"}, {"team_id": "510"}, {"team_id": "280", "children": [{"team_id": "121"}, {"team_id": "206"}, {"team_id": "222"}, {"team_id": "241"}, {"team_id": "175"}, {"team_id": "144"}, {"team_id": "21"}, {"team_id": "30"}, {"team_id": "34", "children": [{"team_id": "3"}]}, {"team_id": "53"}, {"team_id": "61"}, {"team_id": "71"}, {"team_id": "85"}, {"team_id": "105"}, {"team_id": "123"}, {"team_id": "149"}, {"team_id": "171"}, {"team_id": "118"}, {"team_id": "142"}, {"team_id": "166"}, {"team_id": "181"}, {"team_id": "95"}, {"team_id": "104"}, {"team_id": "103"}, {"team_id": "31", "children": [{"team_id": "20"}]}, {"team_id": "56"}, {"team_id": "64"}, {"team_id": "73"}, {"team_id": "89"}, {"team_id": "116"}, {"team_id": "137"}, {"team_id": "164"}, {"team_id": "224"}, {"team_id": "156"}, {"team_id": "236"}, {"team_id": "41"}, {"team_id": "93"}, {"team_id": "140"}, {"team_id": "84"}, {"team_id": "47"}, {"team_id": "101"}]}, {"team_id": "405"}, {"team_id": "496"}, {"team_id": "544"}, {"team_id": "500"}, {"team_id": "328"}, {"team_id": "340"}, {"team_id": "352"}, {"team_id": "369"}, {"team_id": "395"}, {"team_id": "401"}, {"team_id": "432"}, {"team_id": "391"}, {"team_id": "309", "children": [{"team_id": "126"}, {"team_id": "161"}, {"team_id": "176"}, {"team_id": "107"}]}, {"team_id": "374"}, {"team_id": "383"}, {"team_id": "398"}, {"team_id": "413"}, {"team_id": "512"}, {"team_id": "504"}, {"team_id": "249", "children": [{"team_id": "157"}, {"team_id": "128"}]}, {"team_id": "270"}, {"team_id": "298", "children": [{"team_id": "109"}, {"team_id": "94"}, {"team_id": "119"}, {"team_id": "158"}]}, {"team_id": "310", "children": [{"team_id": "92"}]}, {"team_id": "322"}, {"team_id": "449"}, {"team_id": "343"}, {"team_id": "402"}, {"team_id": "358"}, {"team_id": "376"}, {"team_id": "396"}, {"team_id": "316"}, {"team_id": "381"}, {"team_id": "407"}, {"team_id": "350"}, {"team_id": "362"}, {"team_id": "426"}, {"team_id": "286"}]}, {"team_id": "497", "children": [{"team_id": "456"}, {"team_id": "644"}, {"team_id": "660"}, {"team_id": "380"}, {"team_id": "409"}, {"team_id": "424"}, {"team_id": "440"}, {"team_id": "460"}, {"team_id": "493"}, {"team_id": "428"}, {"team_id": "418"}, {"team_id": "434"}, {"team_id": "466"}, {"team_id": "339"}, {"team_id": "351"}, {"team_id": "349"}, {"team_id": "373"}, {"team_id": "382"}, {"team_id": "397"}, {"team_id": "420"}, {"team_id": "452"}, {"team_id": "468"}, {"team_id": "155", "children": [{"team_id": "106"}, {"team_id": "49"}, {"team_id": "82"}]}, {"team_id": "165", "children": [{"team_id": "143"}, {"team_id": "87"}, {"team_id": "102"}, {"team_id": "117"}, {"team_id": "120"}, {"team_id": "131"}, {"team_id": "4"}, {"team_id": "69"}, {"team_id": "74"}, {"team_id": "90"}, {"team_id": "150"}, {"team_id": "146"}, {"team_id": "70"}, {"team_id": "130"}, {"team_id": "99"}]}, {"team_id": "203", "children": [{"team_id": "98"}]}, {"team_id": "219", "children": [{"team_id": "111"}, {"team_id": "129"}]}, {"team_id": "213", "children": [{"team_id": "168"}, {"team_id": "72"}, {"team_id": "15"}, {"team_id": "68"}, {"team_id": "76"}]}, {"team_id": "211", "children": [{"team_id": "169"}, {"team_id": "67"}]}, {"team_id": "292", "children": [{"team_id": "112"}, {"team_id": "208"}]}, {"team_id": "304"}, {"team_id": "366"}, {"team_id": "377"}, {"team_id": "442"}, {"team_id": "430"}, {"team_id": "446"}, {"team_id": "462"}, {"team_id": "439"}, {"team_id": "400"}, {"team_id": "416"}, {"team_id": "541"}, {"team_id": "546"}, {"team_id": "463"}, {"team_id": "479"}, {"team_id": "408"}, {"team_id": "393"}, {"team_id": "477"}, {"team_id": "450"}, {"team_id": "532"}, {"team_id": "361"}, {"team_id": "436"}, {"team_id": "186", "children": [{"team_id": "78"}]}, {"team_id": "260", "children": [{"team_id": "124"}]}, {"team_id": "387"}, {"team_id": "478"}, {"team_id": "557"}, {"team_id": "423"}]}, {"team_id": "513", "children": [{"team_id": "454"}, {"team_id": "495"}, {"team_id": "511"}]}, {"team_id": "545", "children": [{"team_id": "615"}, {"team_id": "476"}]}, {"team_id": "608", "children": [{"team_id": "368"}, {"team_id": "379"}, {"team_id": "390"}, {"team_id": "406"}, {"team_id": "356"}, {"team_id": "421"}]}, {"team_id": "603", "children": [{"team_id": "445"}, {"team_id": "461"}, {"team_id": "536"}, {"team_id": "337"}, {"team_id": "527"}, {"team_id": "411"}]}, {"team_id": "627"}, {"team_id": "663"}, {"team_id": "679", "children": [{"team_id": "614"}, {"team_id": "492"}, {"team_id": "472"}, {"team_id": "488"}]}, {"team_id": "695"}, {"team_id": "710", "children": [{"team_id": "562"}, {"team_id": "543"}]}, {"team_id": "522", "children": [{"team_id": "458"}, {"team_id": "474"}, {"team_id": "370"}, {"team_id": "414"}, {"team_id": "300"}, {"team_id": "294"}, {"team_id": "305"}, {"team_id": "317"}, {"team_id": "341"}, {"team_id": "353"}, {"team_id": "403"}, {"team_id": "459"}, {"team_id": "288"}, {"team_id": "329"}, {"team_id": "325"}]}, {"team_id": "538", "children": [{"team_id": "467"}, {"team_id": "444"}]}, {"team_id": "598", "children": [{"team_id": "572"}, {"team_id": "671"}, {"team_id": "392"}, {"team_id": "565"}]}, {"team_id": "520", "children": [{"team_id": "435"}, {"team_id": "273", "children": [{"team_id": "45"}]}, {"team_id": "287"}, {"team_id": "299"}, {"team_id": "293", "children": [{"team_id": "122"}]}, {"team_id": "412"}, {"team_id": "394"}, {"team_id": "451"}, {"team_id": "365"}]}, {"team_id": "568", "children": [{"team_id": "302"}, {"team_id": "314"}, {"team_id": "338"}, {"team_id": "363"}, {"team_id": "389"}, {"team_id": "326"}]}, {"team_id": "584"}, {"team_id": "604"}, {"team_id": "751"}, {"team_id": "711"}, {"team_id": "727", "children": [{"team_id": "877"}, {"team_id": "928"}]}, {"team_id": "743"}, {"team_id": "759", "children": [{"team_id": "919"}, {"team_id": "935"}, {"team_id": "968"}]}, {"team_id": "551"}, {"team_id": "567", "children": [{"team_id": "324"}, {"team_id": "359"}, {"team_id": "427"}, {"team_id": "443"}, {"team_id": "336"}]}, {"team_id": "583"}, {"team_id": "800", "children": [{"team_id": "912"}, {"team_id": "984"}, {"team_id": "1040"}, {"team_id": "952"}]}, {"team_id": "518", "children": [{"team_id": "525"}, {"team_id": "422"}, {"team_id": "279"}, {"team_id": "266"}, {"team_id": "296", "children": [{"team_id": "8"}, {"team_id": "18"}, {"team_id": "28"}, {"team_id": "46"}, {"team_id": "37"}]}, {"team_id": "308"}, {"team_id": "332"}, {"team_id": "344"}, {"team_id": "438"}, {"team_id": "320"}]}, {"team_id": "534", "children": [{"team_id": "498"}, {"team_id": "514"}]}, {"team_id": "550"}, {"team_id": "566"}, {"team_id": "602"}, {"team_id": "705"}, {"team_id": "724"}, {"team_id": "740"}, {"team_id": "772", "children": [{"team_id": "1124"}]}, {"team_id": "788"}, {"team_id": "704"}, {"team_id": "703"}, {"team_id": "735"}, {"team_id": "722"}, {"team_id": "738"}, {"team_id": "600"}, {"team_id": "617", "children": [{"team_id": "578"}]}, {"team_id": "687", "children": [{"team_id": "399"}, {"team_id": "949"}, {"team_id": "965"}]}, {"team_id": "696"}, {"team_id": "712"}, {"team_id": "776", "children": [{"team_id": "1032"}, {"team_id": "1048", "children": [{"team_id": "1305"}]}, {"team_id": "1064"}, {"team_id": "1013"}, {"team_id": "956"}]}, {"team_id": "792"}, {"team_id": "698"}, {"team_id": "736", "children": [{"team_id": "923"}, {"team_id": "939"}]}, {"team_id": "650", "children": [{"team_id": "429"}, {"team_id": "437"}, {"team_id": "469"}, {"team_id": "485"}, {"team_id": "501"}, {"team_id": "517"}, {"team_id": "453"}, {"team_id": "533"}]}, {"team_id": "666"}, {"team_id": "686"}, {"team_id": "619"}, {"team_id": "573", "children": [{"team_id": "385"}, {"team_id": "347"}]}, {"team_id": "659"}, {"team_id": "675"}, {"team_id": "694"}, {"team_id": "804", "children": [{"team_id": "1009"}]}, {"team_id": "806"}, {"team_id": "569"}, {"team_id": "481"}, {"team_id": "807", "children": [{"team_id": "1102"}]}, {"team_id": "832", "children": [{"team_id": "1027"}, {"team_id": "1051"}, {"team_id": "1110"}]}, {"team_id": "843", "children": [{"team_id": "955"}, {"team_id": "1041"}, {"team_id": "1057"}, {"team_id": "1061"}, {"team_id": "1035"}, {"team_id": "1073"}, {"team_id": "1099"}, {"team_id": "1093"}]}, {"team_id": "612"}, {"team_id": "645"}, {"team_id": "561"}, {"team_id": "622", "children": [{"team_id": "588"}, {"team_id": "610"}]}, {"team_id": "529", "children": [{"team_id": "483"}]}, {"team_id": "647"}, {"team_id": "726"}, {"team_id": "552"}, {"team_id": "683"}, {"team_id": "775"}, {"team_id": "502", "children": [{"team_id": "371"}]}, {"team_id": "582"}, {"team_id": "756"}, {"team_id": "719"}, {"team_id": "624"}, {"team_id": "728"}, {"team_id": "632"}, {"team_id": "630"}, {"team_id": "721"}, {"team_id": "791"}, {"team_id": "636"}]}, {"team_id": "618", "children": [{"team_id": "507"}, {"team_id": "523"}, {"team_id": "539"}, {"team_id": "571"}, {"team_id": "587"}, {"team_id": "609"}, {"team_id": "633"}, {"team_id": "651"}, {"team_id": "667"}, {"team_id": "774", "children": [{"team_id": "909"}]}, {"team_id": "790"}, {"team_id": "838", "children": [{"team_id": "1068"}, {"team_id": "1084"}, {"team_id": "1123"}, {"team_id": "1139"}, {"team_id": "1007"}]}, {"team_id": "857", "children": [{"team_id": "1129", "children": [{"team_id": "1343"}]}, {"team_id": "1145"}, {"team_id": "981"}, {"team_id": "1019"}, {"team_id": "1113"}]}, {"team_id": "737"}, {"team_id": "929", "children": [{"team_id": "1152", "children": [{"team_id": "1335"}]}, {"team_id": "1043"}, {"team_id": "1101"}, {"team_id": "1076"}, {"team_id": "1187"}, {"team_id": "1039"}, {"team_id": "1104"}, {"team_id": "1062"}]}, {"team_id": "646"}, {"team_id": "750"}, {"team_id": "410", "children": [{"team_id": "244"}, {"team_id": "267"}, {"team_id": "303"}, {"team_id": "318"}, {"team_id": "228", "children": [{"team_id": "145"}]}, {"team_id": "250"}, {"team_id": "360"}, {"team_id": "372"}, {"team_id": "282"}, {"team_id": "306"}, {"team_id": "264"}, {"team_id": "281"}, {"team_id": "194"}, {"team_id": "210"}, {"team_id": "243"}, {"team_id": "290", "children": [{"team_id": "50"}]}, {"team_id": "348"}, {"team_id": "291"}, {"team_id": "312"}, {"team_id": "330"}, {"team_id": "226"}]}, {"team_id": "555"}, {"team_id": "685"}, {"team_id": "822"}, {"team_id": "626"}]}, {"team_id": "641", "children": [{"team_id": "590"}, {"team_id": "637"}, {"team_id": "830"}, {"team_id": "848", "children": [{"team_id": "1089"}, {"team_id": "1105"}]}, {"team_id": "864"}, {"team_id": "896", "children": [{"team_id": "1136"}]}, {"team_id": "900", "children": [{"team_id": "1156"}, {"team_id": "1172", "children": [{"team_id": "1396"}, {"team_id": "1416"}]}, {"team_id": "1188", "children": [{"team_id": "1426", "children": [{"team_id": "1696"}, {"team_id": "1798"}, {"team_id": "1863"}, {"team_id": "1910"}, {"team_id": "1831"}, {"team_id": "1857"}, {"team_id": "1909", "children": [{"team_id": "2339"}]}, {"team_id": "1935", "children": [{"team_id": "2313"}, {"team_id": "2333"}]}, {"team_id": "1837"}, {"team_id": "1883"}]}, {"team_id": "1447"}]}, {"team_id": "1072"}]}, {"team_id": "916", "children": [{"team_id": "1047"}, {"team_id": "1063"}, {"team_id": "1079"}, {"team_id": "1107"}, {"team_id": "1091"}, {"team_id": "1055"}]}, {"team_id": "932", "children": [{"team_id": "1029"}, {"team_id": "1100"}, {"team_id": "1080"}]}, {"team_id": "586"}, {"team_id": "560"}, {"team_id": "576", "children": [{"team_id": "509"}, {"team_id": "252"}, {"team_id": "307"}, {"team_id": "415"}, {"team_id": "232", "children": [{"team_id": "62"}]}]}, {"team_id": "699"}, {"team_id": "731"}, {"team_id": "747"}, {"team_id": "763"}, {"team_id": "613"}, {"team_id": "880"}, {"team_id": "948"}, {"team_id": "715"}]}, {"team_id": "657", "children": [{"team_id": "697"}, {"team_id": "821", "children": [{"team_id": "1045"}]}, {"team_id": "828"}, {"team_id": "835", "children": [{"team_id": "1059"}]}, {"team_id": "548", "children": [{"team_id": "313"}]}, {"team_id": "599", "children": [{"team_id": "725"}]}, {"team_id": "623"}, {"team_id": "702"}, {"team_id": "783"}, {"team_id": "799"}, {"team_id": "805"}, {"team_id": "564"}]}, {"team_id": "673", "children": [{"team_id": "701"}, {"team_id": "723"}, {"team_id": "739"}, {"team_id": "798"}, {"team_id": "816"}, {"team_id": "829"}, {"team_id": "825"}, {"team_id": "515", "children": [{"team_id": "499"}, {"team_id": "268"}, {"team_id": "284"}, {"team_id": "345"}]}, {"team_id": "680"}, {"team_id": "648", "children": [{"team_id": "530"}, {"team_id": "596"}]}, {"team_id": "755"}, {"team_id": "771"}, {"team_id": "797"}, {"team_id": "741"}, {"team_id": "757"}, {"team_id": "773"}, {"team_id": "789"}, {"team_id": "767"}, {"team_id": "814"}, {"team_id": "846"}, {"team_id": "862"}, {"team_id": "888", "children": [{"team_id": "1131"}]}, {"team_id": "475"}, {"team_id": "508", "children": [{"team_id": "404"}, {"team_id": "235"}, {"team_id": "256"}, {"team_id": "277"}, {"team_id": "315"}]}, {"team_id": "524"}, {"team_id": "549", "children": [{"team_id": "482"}, {"team_id": "354"}, {"team_id": "342"}]}, {"team_id": "563"}, {"team_id": "662"}, {"team_id": "708"}, {"team_id": "720"}, {"team_id": "542", "children": [{"team_id": "196", "children": [{"team_id": "42"}, {"team_id": "54"}, {"team_id": "44"}, {"team_id": "43"}]}, {"team_id": "212"}, {"team_id": "271"}]}, {"team_id": "558"}, {"team_id": "717"}, {"team_id": "813"}, {"team_id": "628"}, {"team_id": "642"}, {"team_id": "670"}, {"team_id": "875"}, {"team_id": "531", "children": [{"team_id": "419"}, {"team_id": "311"}]}, {"team_id": "779"}]}, {"team_id": "689", "children": [{"team_id": "554"}, {"team_id": "682"}, {"team_id": "640"}, {"team_id": "656"}, {"team_id": "672"}, {"team_id": "559"}, {"team_id": "575"}, {"team_id": "681"}, {"team_id": "872"}, {"team_id": "898", "children": [{"team_id": "1143"}, {"team_id": "1115"}]}, {"team_id": "905"}, {"team_id": "925", "children": [{"team_id": "1154"}, {"team_id": "1119"}]}, {"team_id": "941"}, {"team_id": "973", "children": [{"team_id": "1198", "children": [{"team_id": "1438"}, {"team_id": "1458"}]}]}, {"team_id": "989", "children": [{"team_id": "1164", "children": [{"team_id": "1364"}, {"team_id": "1379", "children": [{"team_id": "1750"}]}, {"team_id": "1399"}, {"team_id": "1419", "children": [{"team_id": "1882"}]}, {"team_id": "1468", "children": [{"team_id": "1893"}]}, {"team_id": "1457", "children": [{"team_id": "1937"}, {"team_id": "1963", "children": [{"team_id": "2191"}, {"team_id": "2219"}, {"team_id": "2403"}, {"team_id": "2452"}, {"team_id": "2284"}, {"team_id": "2314"}, {"team_id": "2369"}]}, {"team_id": "1967", "children": [{"team_id": "2395"}, {"team_id": "2425"}, {"team_id": "2463"}, {"team_id": "2493"}, {"team_id": "2379"}, {"team_id": "2507"}]}, {"team_id": "1949", "children": [{"team_id": "2278"}, {"team_id": "2281"}, {"team_id": "2383"}, {"team_id": "2306"}]}, {"team_id": "2009", "children": [{"team_id": "2301"}]}, {"team_id": "1983"}]}, {"team_id": "1477"}, {"team_id": "1464"}, {"team_id": "1439"}, {"team_id": "1484"}]}, {"team_id": "1196", "children": [{"team_id": "1418"}, {"team_id": "1474", "children": [{"team_id": "1731"}]}]}, {"team_id": "1212"}, {"team_id": "1228", "children": [{"team_id": "1421"}, {"team_id": "1442"}, {"team_id": "1463"}, {"team_id": "1483"}]}, {"team_id": "1180"}]}, {"team_id": "978", "children": [{"team_id": "1087", "children": [{"team_id": "1377"}, {"team_id": "1397"}, {"team_id": "1359"}]}, {"team_id": "1204", "children": [{"team_id": "1406"}, {"team_id": "1691", "children": [{"team_id": "1796"}, {"team_id": "1822"}, {"team_id": "1943"}, {"team_id": "1819"}, {"team_id": "1858"}, {"team_id": "1775"}, {"team_id": "1891"}, {"team_id": "1903", "children": [{"team_id": "2223"}, {"team_id": "2242"}, {"team_id": "2361"}]}, {"team_id": "1792"}, {"team_id": "1818"}, {"team_id": "1974", "children": [{"team_id": "2335"}, {"team_id": "2413"}, {"team_id": "2357"}, {"team_id": "2411"}, {"team_id": "2441"}, {"team_id": "2365"}, {"team_id": "2467"}]}, {"team_id": "2000"}, {"team_id": "2026", "children": [{"team_id": "2198"}, {"team_id": "2409"}, {"team_id": "2448"}]}, {"team_id": "2052", "children": [{"team_id": "2404"}]}, {"team_id": "2125", "children": [{"team_id": "2465"}, {"team_id": "2415"}, {"team_id": "2445"}, {"team_id": "2460"}, {"team_id": "2367"}, {"team_id": "2397"}, {"team_id": "2427"}, {"team_id": "2355"}, {"team_id": "2479"}, {"team_id": "2428"}, {"team_id": "2457"}, {"team_id": "2486"}, {"team_id": "2546"}, {"team_id": "2576"}, {"team_id": "2584"}, {"team_id": "2608"}, {"team_id": "2656"}, {"team_id": "2686"}, {"team_id": "2475"}, {"team_id": "2504"}, {"team_id": "2336"}, {"team_id": "2484"}, {"team_id": "2450"}, {"team_id": "2516"}, {"team_id": "2624"}, {"team_id": "2523"}]}, {"team_id": "1780"}, {"team_id": "1806"}, {"team_id": "1919"}, {"team_id": "1939"}, {"team_id": "1965", "children": [{"team_id": "2277"}, {"team_id": "2412"}, {"team_id": "2442"}, {"team_id": "2498"}]}, {"team_id": "1991"}, {"team_id": "2002", "children": [{"team_id": "2302"}, {"team_id": "2453"}, {"team_id": "2482"}, {"team_id": "2512"}, {"team_id": "2589"}, {"team_id": "2581"}, {"team_id": "2471"}, {"team_id": "2500"}, {"team_id": "2557"}, {"team_id": "2587"}, {"team_id": "2617"}, {"team_id": "2647"}, {"team_id": "2418"}, {"team_id": "2521"}, {"team_id": "2530"}, {"team_id": "2695"}]}, {"team_id": "2118", "children": [{"team_id": "2230"}, {"team_id": "2390"}]}, {"team_id": "2146", "children": [{"team_id": "2526"}, {"team_id": "2289"}]}, {"team_id": "2178", "children": [{"team_id": "2483"}, {"team_id": "2513"}, {"team_id": "2543"}, {"team_id": "2573"}, {"team_id": "2620"}, {"team_id": "2650"}, {"team_id": "2421"}, {"team_id": "2524"}, {"team_id": "2567"}, {"team_id": "2621"}, {"team_id": "2443"}, {"team_id": "2511"}, {"team_id": "2614"}, {"team_id": "2644"}, {"team_id": "2674"}, {"team_id": "2704"}, {"team_id": "2783"}, {"team_id": "2343"}, {"team_id": "2373"}, {"team_id": "2248"}, {"team_id": "2571"}, {"team_id": "2537"}, {"team_id": "2554"}, {"team_id": "2734"}]}, {"team_id": "1897"}, {"team_id": "1975"}, {"team_id": "2001"}, {"team_id": "2027", "children": [{"team_id": "2564"}]}, {"team_id": "1814"}, {"team_id": "1849"}, {"team_id": "1875"}, {"team_id": "1901"}, {"team_id": "1927"}, {"team_id": "1979"}, {"team_id": "2005"}, {"team_id": "2031"}, {"team_id": "2057"}, {"team_id": "1892"}, {"team_id": "1929"}, {"team_id": "1955"}, {"team_id": "1981"}, {"team_id": "1828"}, {"team_id": "1854"}, {"team_id": "1880"}, {"team_id": "1932"}, {"team_id": "1848"}, {"team_id": "1874"}, {"team_id": "1917"}, {"team_id": "1865"}, {"team_id": "1948"}, {"team_id": "2099"}, {"team_id": "1913"}, {"team_id": "2045"}, {"team_id": "1923"}, {"team_id": "1820"}, {"team_id": "1953"}, {"team_id": "1866"}, {"team_id": "1832"}, {"team_id": "1958"}]}, {"team_id": "1793", "children": [{"team_id": "2047", "children": [{"team_id": "2310"}, {"team_id": "2414"}, {"team_id": "2491"}]}, {"team_id": "2073"}, {"team_id": "2066"}, {"team_id": "2092"}, {"team_id": "2156", "children": [{"team_id": "2577"}, {"team_id": "2603"}, {"team_id": "2633"}, {"team_id": "2684"}, {"team_id": "2458"}, {"team_id": "2501"}, {"team_id": "2531"}, {"team_id": "2561"}, {"team_id": "2595"}, {"team_id": "2432"}, {"team_id": "2472"}, {"team_id": "2506"}, {"team_id": "2590"}, {"team_id": "2682"}, {"team_id": "2547"}, {"team_id": "2338"}]}, {"team_id": "2184", "children": [{"team_id": "2499"}, {"team_id": "2503"}, {"team_id": "2517"}, {"team_id": "2544"}, {"team_id": "2340"}, {"team_id": "2370"}, {"team_id": "2399"}, {"team_id": "2429"}, {"team_id": "2565"}, {"team_id": "2599"}, {"team_id": "2623"}, {"team_id": "2642"}, {"team_id": "2574"}, {"team_id": "2535"}]}, {"team_id": "2215", "children": [{"team_id": "2612"}, {"team_id": "2630"}, {"team_id": "2660"}, {"team_id": "2667"}, {"team_id": "2591"}, {"team_id": "2308"}, {"team_id": "2400"}, {"team_id": "2468"}, {"team_id": "2430"}, {"team_id": "2368"}, {"team_id": "2396"}, {"team_id": "2533"}, {"team_id": "2598"}, {"team_id": "2422"}, {"team_id": "2481"}, {"team_id": "2586"}, {"team_id": "2582"}, {"team_id": "2392"}, {"team_id": "2444"}, {"team_id": "2563"}]}, {"team_id": "2243", "children": [{"team_id": "2572"}, {"team_id": "2451"}, {"team_id": "2606"}, {"team_id": "2636"}, {"team_id": "2542"}, {"team_id": "2666"}]}, {"team_id": "2270", "children": [{"team_id": "2534"}, {"team_id": "2649"}, {"team_id": "2672"}, {"team_id": "2700"}, {"team_id": "2489"}, {"team_id": "2532"}, {"team_id": "2553"}, {"team_id": "2594"}, {"team_id": "2171"}, {"team_id": "2730"}, {"team_id": "2609"}]}, {"team_id": "2300", "children": [{"team_id": "2509"}, {"team_id": "2562"}, {"team_id": "2456"}, {"team_id": "2502"}, {"team_id": "2593"}, {"team_id": "2540"}, {"team_id": "2570"}, {"team_id": "2473"}]}, {"team_id": "2305", "children": [{"team_id": "2492"}, {"team_id": "2634"}, {"team_id": "2657"}, {"team_id": "2670"}, {"team_id": "2550"}, {"team_id": "2601"}, {"team_id": "2706"}, {"team_id": "2736"}, {"team_id": "2797"}, {"team_id": "2434"}, {"team_id": "2464"}, {"team_id": "2497"}, {"team_id": "2545"}, {"team_id": "2655"}, {"team_id": "2685"}, {"team_id": "2687"}, {"team_id": "2724"}, {"team_id": "2737"}, {"team_id": "2720"}, {"team_id": "2759"}, {"team_id": "2641"}, {"team_id": "2631"}, {"team_id": "2683"}, {"team_id": "2496"}, {"team_id": "2549"}, {"team_id": "2560"}, {"team_id": "2539"}, {"team_id": "2541"}, {"team_id": "2673"}, {"team_id": "2664"}, {"team_id": "2707"}, {"team_id": "2689"}, {"team_id": "2715"}, {"team_id": "2462"}, {"team_id": "2447"}, {"team_id": "2765"}, {"team_id": "2515"}, {"team_id": "2738"}, {"team_id": "2611"}, {"team_id": "2585"}, {"team_id": "2643"}, {"team_id": "2661"}]}, {"team_id": "2330", "children": [{"team_id": "2477"}, {"team_id": "2536"}, {"team_id": "2569"}, {"team_id": "2639"}, {"team_id": "2635"}]}, {"team_id": "2362", "children": [{"team_id": "2701"}, {"team_id": "2745"}, {"team_id": "2775"}, {"team_id": "2613"}, {"team_id": "2580"}, {"team_id": "2597"}, {"team_id": "2671"}, {"team_id": "2519"}, {"team_id": "2522"}, {"team_id": "2552"}, {"team_id": "2627"}, {"team_id": "2592"}, {"team_id": "2691"}, {"team_id": "2721"}, {"team_id": "2751"}, {"team_id": "2578"}, {"team_id": "2638"}, {"team_id": "2668"}, {"team_id": "2697"}, {"team_id": "2575"}, {"team_id": "2579"}, {"team_id": "2626"}, {"team_id": "2556"}, {"team_id": "2605"}, {"team_id": "2651"}, {"team_id": "2681"}, {"team_id": "2709"}, {"team_id": "2782"}, {"team_id": "2352"}, {"team_id": "2725"}, {"team_id": "2417"}, {"team_id": "2632"}, {"team_id": "2548"}, {"team_id": "2469"}]}, {"team_id": "1749"}, {"team_id": "1924"}, {"team_id": "1950"}, {"team_id": "1773"}, {"team_id": "2059"}, {"team_id": "1884"}, {"team_id": "1977"}, {"team_id": "1853"}, {"team_id": "1879"}, {"team_id": "1886"}, {"team_id": "1912"}, {"team_id": "1964"}, {"team_id": "1990"}, {"team_id": "1997", "children": [{"team_id": "2508"}, {"team_id": "2622"}, {"team_id": "2600"}]}, {"team_id": "1915"}, {"team_id": "1976"}, {"team_id": "2018"}, {"team_id": "2044"}, {"team_id": "1945"}, {"team_id": "2128"}, {"team_id": "2241"}, {"team_id": "2332"}, {"team_id": "2007"}, {"team_id": "2021"}, {"team_id": "1938"}, {"team_id": "1889"}, {"team_id": "2064"}]}]}, {"team_id": "1103"}]}, {"team_id": "994"}, {"team_id": "692"}, {"team_id": "706"}, {"team_id": "795"}, {"team_id": "811"}, {"team_id": "786"}, {"team_id": "802"}, {"team_id": "818"}, {"team_id": "831"}, {"team_id": "860"}, {"team_id": "768"}, {"team_id": "784"}, {"team_id": "621"}, {"team_id": "643"}, {"team_id": "669"}, {"team_id": "665"}, {"team_id": "570"}, {"team_id": "688"}, {"team_id": "891"}, {"team_id": "957"}, {"team_id": "664"}, {"team_id": "827"}, {"team_id": "844"}, {"team_id": "753"}]}, {"team_id": "714", "children": [{"team_id": "580"}, {"team_id": "808"}, {"team_id": "824"}, {"team_id": "878"}, {"team_id": "894"}, {"team_id": "817"}, {"team_id": "833"}, {"team_id": "785"}, {"team_id": "870"}, {"team_id": "803"}, {"team_id": "819"}, {"team_id": "841"}, {"team_id": "876"}, {"team_id": "914", "children": [{"team_id": "1161"}, {"team_id": "1173"}, {"team_id": "1189", "children": [{"team_id": "1430"}, {"team_id": "1471"}, {"team_id": "1487", "children": [{"team_id": "1784"}, {"team_id": "1810"}, {"team_id": "1797"}, {"team_id": "1801"}]}, {"team_id": "1450"}]}, {"team_id": "1221"}, {"team_id": "1236", "children": [{"team_id": "1382"}, {"team_id": "1402"}, {"team_id": "1524", "children": [{"team_id": "1720"}, {"team_id": "1824"}, {"team_id": "1876"}, {"team_id": "1902"}, {"team_id": "1928"}, {"team_id": "1747"}, {"team_id": "1850"}]}, {"team_id": "1548"}, {"team_id": "1572", "children": [{"team_id": "1795"}, {"team_id": "1904"}, {"team_id": "1878"}]}, {"team_id": "1504"}]}, {"team_id": "1205"}]}, {"team_id": "921", "children": [{"team_id": "1071"}]}, {"team_id": "937"}, {"team_id": "535"}, {"team_id": "574"}, {"team_id": "654"}, {"team_id": "579"}, {"team_id": "593"}, {"team_id": "769"}, {"team_id": "859", "children": [{"team_id": "1112"}, {"team_id": "1128"}, {"team_id": "1144"}, {"team_id": "1160"}]}, {"team_id": "918"}, {"team_id": "881"}, {"team_id": "926"}, {"team_id": "839", "children": [{"team_id": "1127"}]}, {"team_id": "760"}, {"team_id": "754"}, {"team_id": "752"}, {"team_id": "882"}, {"team_id": "820"}, {"team_id": "676"}, {"team_id": "904"}]}, {"team_id": "730", "children": [{"team_id": "850", "children": [{"team_id": "1232"}, {"team_id": "1227"}, {"team_id": "1243"}]}, {"team_id": "592"}, {"team_id": "796"}, {"team_id": "770"}, {"team_id": "616"}]}, {"team_id": "746", "children": [{"team_id": "851"}, {"team_id": "782"}, {"team_id": "853"}, {"team_id": "837"}]}, {"team_id": "762", "children": [{"team_id": "910"}, {"team_id": "954"}, {"team_id": "970", "children": [{"team_id": "1178"}, {"team_id": "1194", "children": [{"team_id": "1432"}, {"team_id": "1472"}, {"team_id": "1492"}, {"team_id": "1452"}]}, {"team_id": "1210", "children": [{"team_id": "1511"}, {"team_id": "1408"}]}]}, {"team_id": "1002", "children": [{"team_id": "1159", "children": [{"team_id": "1448"}]}, {"team_id": "1175"}, {"team_id": "1191", "children": [{"team_id": "1390"}]}]}, {"team_id": "1018", "children": [{"team_id": "1192", "children": [{"team_id": "1367"}, {"team_id": "1385"}, {"team_id": "1405"}]}, {"team_id": "1208"}, {"team_id": "1147"}, {"team_id": "1163"}, {"team_id": "1179"}, {"team_id": "1185", "children": [{"team_id": "1428"}, {"team_id": "1441"}]}, {"team_id": "1226"}, {"team_id": "1201"}]}, {"team_id": "834"}, {"team_id": "866"}, {"team_id": "911", "children": [{"team_id": "1150"}, {"team_id": "1151"}, {"team_id": "1167"}]}, {"team_id": "902"}, {"team_id": "917"}, {"team_id": "940"}, {"team_id": "913"}, {"team_id": "945"}, {"team_id": "907"}, {"team_id": "986"}, {"team_id": "886"}, {"team_id": "638"}]}, {"team_id": "778", "children": [{"team_id": "823"}, {"team_id": "868"}, {"team_id": "849"}, {"team_id": "865"}, {"team_id": "845"}, {"team_id": "653"}, {"team_id": "674"}, {"team_id": "690"}, {"team_id": "742"}, {"team_id": "852"}, {"team_id": "589", "children": [{"team_id": "335"}]}, {"team_id": "611"}, {"team_id": "635"}, {"team_id": "892"}]}, {"team_id": "794", "children": [{"team_id": "884"}, {"team_id": "927"}, {"team_id": "943"}, {"team_id": "959", "children": [{"team_id": "1135"}]}, {"team_id": "991", "children": [{"team_id": "1250", "children": [{"team_id": "1476"}, {"team_id": "1516"}, {"team_id": "1515", "children": [{"team_id": "1823"}, {"team_id": "1944"}]}, {"team_id": "1528", "children": [{"team_id": "1840"}]}, {"team_id": "1496"}]}, {"team_id": "1242"}]}, {"team_id": "1010"}, {"team_id": "1026", "children": [{"team_id": "1170"}, {"team_id": "1186", "children": [{"team_id": "1376"}]}, {"team_id": "1202", "children": [{"team_id": "1420"}]}, {"team_id": "1234", "children": [{"team_id": "1409"}, {"team_id": "1429"}, {"team_id": "1449"}, {"team_id": "1470", "children": [{"team_id": "2008"}, {"team_id": "1906"}]}, {"team_id": "1538"}, {"team_id": "1467"}]}, {"team_id": "1251"}, {"team_id": "1267"}, {"team_id": "1283", "children": [{"team_id": "1488"}, {"team_id": "1508"}, {"team_id": "1519", "children": [{"team_id": "1962"}, {"team_id": "2023"}]}, {"team_id": "1583", "children": [{"team_id": "1916"}, {"team_id": "1827"}, {"team_id": "1954"}, {"team_id": "1980"}, {"team_id": "2006", "children": [{"team_id": "2459"}, {"team_id": "2518"}]}, {"team_id": "1821"}, {"team_id": "1847"}, {"team_id": "1947"}, {"team_id": "1942"}, {"team_id": "2153"}]}, {"team_id": "1407"}, {"team_id": "1427"}, {"team_id": "1425"}, {"team_id": "1461"}, {"team_id": "1481"}, {"team_id": "1486", "children": [{"team_id": "1776"}]}, {"team_id": "1490"}, {"team_id": "1530", "children": [{"team_id": "1921"}, {"team_id": "1973"}, {"team_id": "2033"}, {"team_id": "2051"}, {"team_id": "1956"}, {"team_id": "1895"}, {"team_id": "1887"}]}, {"team_id": "1543"}, {"team_id": "1446"}, {"team_id": "1509"}]}, {"team_id": "1321", "children": [{"team_id": "1532"}, {"team_id": "1557"}, {"team_id": "1581"}, {"team_id": "1629", "children": [{"team_id": "1933"}]}, {"team_id": "1653", "children": [{"team_id": "1961"}, {"team_id": "1987"}, {"team_id": "2039"}, {"team_id": "2071", "children": [{"team_id": "2319"}, {"team_id": "2349"}]}, {"team_id": "2086", "children": [{"team_id": "2387"}]}, {"team_id": "2115", "children": [{"team_id": "2455"}, {"team_id": "2514"}]}, {"team_id": "1969"}, {"team_id": "1995"}, {"team_id": "1999"}, {"team_id": "1968"}, {"team_id": "2013"}, {"team_id": "2085"}]}, {"team_id": "1685", "children": [{"team_id": "1998"}, {"team_id": "2035"}, {"team_id": "2037"}, {"team_id": "2061"}, {"team_id": "2020"}, {"team_id": "2032"}, {"team_id": "1972"}, {"team_id": "1994"}, {"team_id": "2056"}]}, {"team_id": "1709", "children": [{"team_id": "2017"}, {"team_id": "2043"}, {"team_id": "2069"}, {"team_id": "2095"}, {"team_id": "1802"}, {"team_id": "2091"}]}, {"team_id": "1736", "children": [{"team_id": "2025"}, {"team_id": "1918"}, {"team_id": "1970"}, {"team_id": "2022"}, {"team_id": "2084"}, {"team_id": "2075"}, {"team_id": "2048"}, {"team_id": "2049"}, {"team_id": "1957"}, {"team_id": "2058"}, {"team_id": "2076"}]}, {"team_id": "1740", "children": [{"team_id": "2014"}, {"team_id": "1988"}, {"team_id": "2040"}, {"team_id": "2100"}, {"team_id": "2126"}, {"team_id": "2083"}, {"team_id": "2109"}, {"team_id": "2144"}, {"team_id": "2074"}, {"team_id": "2145"}]}, {"team_id": "1478"}, {"team_id": "1498"}, {"team_id": "1542"}, {"team_id": "1590", "children": [{"team_id": "1836"}]}, {"team_id": "1614"}, {"team_id": "1599"}, {"team_id": "1510", "children": [{"team_id": "2011"}]}, {"team_id": "1531", "children": [{"team_id": "1946"}, {"team_id": "2034"}, {"team_id": "2060"}, {"team_id": "2088", "children": [{"team_id": "2408"}, {"team_id": "2438"}, {"team_id": "2615"}, {"team_id": "2416"}]}, {"team_id": "1920"}, {"team_id": "2102"}]}, {"team_id": "1566"}, {"team_id": "1502"}, {"team_id": "1526"}, {"team_id": "1555", "children": [{"team_id": "1931"}, {"team_id": "1900"}, {"team_id": "1926"}, {"team_id": "2104"}]}, {"team_id": "1579"}, {"team_id": "1589", "children": [{"team_id": "2036"}, {"team_id": "2068"}]}, {"team_id": "1605"}, {"team_id": "1704"}, {"team_id": "1518"}, {"team_id": "1623"}, {"team_id": "1506"}, {"team_id": "1593"}]}, {"team_id": "1213", "children": [{"team_id": "1473"}, {"team_id": "1433"}, {"team_id": "1451"}]}, {"team_id": "1223"}, {"team_id": "1218"}, {"team_id": "1299"}]}, {"team_id": "1042", "children": [{"team_id": "1157"}, {"team_id": "1219"}]}, {"team_id": "1106", "children": [{"team_id": "1239", "children": [{"team_id": "1527"}, {"team_id": "1647"}, {"team_id": "1551"}]}, {"team_id": "1256"}, {"team_id": "1259", "children": [{"team_id": "1480", "children": [{"team_id": "1816"}, {"team_id": "1894"}, {"team_id": "1842"}]}, {"team_id": "1523"}]}, {"team_id": "1225", "children": [{"team_id": "1540"}, {"team_id": "1588", "children": [{"team_id": "1905"}, {"team_id": "1993"}]}, {"team_id": "1612", "children": [{"team_id": "1992"}]}, {"team_id": "1607"}, {"team_id": "1631"}, {"team_id": "1522"}, {"team_id": "1567"}, {"team_id": "1578", "children": [{"team_id": "2137"}, {"team_id": "2165"}]}, {"team_id": "1602", "children": [{"team_id": "1966"}]}, {"team_id": "1564"}, {"team_id": "1503"}]}, {"team_id": "1176"}, {"team_id": "1224"}, {"team_id": "1265", "children": [{"team_id": "1499"}, {"team_id": "1500"}, {"team_id": "1469"}, {"team_id": "1688"}, {"team_id": "1712"}]}, {"team_id": "1281", "children": [{"team_id": "1535"}, {"team_id": "1556"}]}, {"team_id": "1231"}, {"team_id": "1247", "children": [{"team_id": "1517"}, {"team_id": "1521", "children": [{"team_id": "2053"}, {"team_id": "2079"}, {"team_id": "2131"}, {"team_id": "2105"}]}, {"team_id": "1545"}]}, {"team_id": "1237"}, {"team_id": "1209"}]}, {"team_id": "971", "children": [{"team_id": "1134"}, {"team_id": "1121"}, {"team_id": "1217"}, {"team_id": "1195"}, {"team_id": "1244"}, {"team_id": "1148"}, {"team_id": "1211"}]}, {"team_id": "1014", "children": [{"team_id": "1260"}, {"team_id": "1266", "children": [{"team_id": "1513"}]}, {"team_id": "1207"}]}, {"team_id": "901"}, {"team_id": "953"}, {"team_id": "969"}, {"team_id": "489", "children": [{"team_id": "276"}, {"team_id": "357"}, {"team_id": "259"}]}, {"team_id": "505", "children": [{"team_id": "431"}, {"team_id": "447"}]}, {"team_id": "537"}, {"team_id": "553"}, {"team_id": "585"}, {"team_id": "607"}, {"team_id": "649"}, {"team_id": "658"}, {"team_id": "661"}, {"team_id": "677"}, {"team_id": "709"}, {"team_id": "718"}, {"team_id": "734"}, {"team_id": "766"}, {"team_id": "975"}, {"team_id": "1074", "children": [{"team_id": "1168"}, {"team_id": "1337", "children": [{"team_id": "1493"}, {"team_id": "1539"}, {"team_id": "1552", "children": [{"team_id": "1873"}]}, {"team_id": "1584", "children": [{"team_id": "1941"}]}, {"team_id": "1596"}, {"team_id": "1592"}, {"team_id": "1616"}, {"team_id": "1664"}, {"team_id": "1690", "children": [{"team_id": "2003"}, {"team_id": "1989"}, {"team_id": "2029"}]}, {"team_id": "1697", "children": [{"team_id": "2111"}, {"team_id": "2139"}, {"team_id": "1914"}, {"team_id": "1959"}, {"team_id": "1985"}, {"team_id": "2078"}, {"team_id": "2098"}, {"team_id": "2024"}, {"team_id": "2132"}, {"team_id": "2160", "children": [{"team_id": "2342"}, {"team_id": "2402"}, {"team_id": "2423"}, {"team_id": "2439"}, {"team_id": "2461"}, {"team_id": "2528"}, {"team_id": "2426"}, {"team_id": "2527"}]}, {"team_id": "1940"}, {"team_id": "2124"}]}, {"team_id": "1554"}, {"team_id": "1560"}, {"team_id": "1640"}]}, {"team_id": "1353", "children": [{"team_id": "1686"}, {"team_id": "1707"}, {"team_id": "1766", "children": [{"team_id": "2010"}, {"team_id": "2113"}, {"team_id": "2170"}, {"team_id": "2202", "children": [{"team_id": "2616"}, {"team_id": "2665"}, {"team_id": "2754"}, {"team_id": "2558"}]}, {"team_id": "2041"}, {"team_id": "2093"}, {"team_id": "2142"}, {"team_id": "2087"}, {"team_id": "2067"}]}, {"team_id": "1626"}]}, {"team_id": "1370", "children": [{"team_id": "1575"}, {"team_id": "1618"}]}, {"team_id": "1413"}, {"team_id": "1393"}]}, {"team_id": "934"}, {"team_id": "521", "children": [{"team_id": "80", "children": [{"team_id": "19"}, {"team_id": "11"}, {"team_id": "22"}, {"team_id": "58"}, {"team_id": "65"}, {"team_id": "17"}, {"team_id": "29"}, {"team_id": "38"}, {"team_id": "59"}, {"team_id": "10"}, {"team_id": "57"}, {"team_id": "39"}]}, {"team_id": "125", "children": [{"team_id": "7"}]}, {"team_id": "152"}, {"team_id": "188"}, {"team_id": "205"}, {"team_id": "221"}, {"team_id": "237"}, {"team_id": "248"}, {"team_id": "269"}, {"team_id": "285"}, {"team_id": "297"}, {"team_id": "173"}, {"team_id": "247"}, {"team_id": "321"}]}, {"team_id": "631"}, {"team_id": "693"}, {"team_id": "744"}]}, {"team_id": "810", "children": [{"team_id": "765"}, {"team_id": "801"}, {"team_id": "908"}, {"team_id": "985"}, {"team_id": "998"}, {"team_id": "997", "children": [{"team_id": "1252"}, {"team_id": "1268", "children": [{"team_id": "1491"}]}]}, {"team_id": "1017", "children": [{"team_id": "1169"}]}, {"team_id": "758"}, {"team_id": "733"}, {"team_id": "982"}, {"team_id": "678"}]}, {"team_id": "826", "children": [{"team_id": "897"}]}, {"team_id": "842", "children": [{"team_id": "1034"}, {"team_id": "1050", "children": [{"team_id": "1261"}, {"team_id": "1182"}, {"team_id": "1276", "children": [{"team_id": "1501"}]}, {"team_id": "1292"}]}, {"team_id": "1082", "children": [{"team_id": "1230"}, {"team_id": "1235"}, {"team_id": "1248"}, {"team_id": "1308"}, {"team_id": "1214"}, {"team_id": "1215"}]}, {"team_id": "1130", "children": [{"team_id": "1323"}, {"team_id": "1339"}, {"team_id": "1355", "children": [{"team_id": "1485"}, {"team_id": "1585"}, {"team_id": "1609"}, {"team_id": "1633"}, {"team_id": "1632", "children": [{"team_id": "1982"}, {"team_id": "2019"}]}, {"team_id": "1652", "children": [{"team_id": "2062"}]}, {"team_id": "1641", "children": [{"team_id": "1984"}]}, {"team_id": "1667"}, {"team_id": "1665"}, {"team_id": "1489"}, {"team_id": "1561"}, {"team_id": "1656"}, {"team_id": "1689"}]}, {"team_id": "1373", "children": [{"team_id": "1533"}, {"team_id": "1650"}, {"team_id": "1674"}, {"team_id": "1722", "children": [{"team_id": "2070"}, {"team_id": "2004"}]}, {"team_id": "1698"}]}, {"team_id": "1412", "children": [{"team_id": "1737", "children": [{"team_id": "2119"}, {"team_id": "2135"}]}, {"team_id": "1558"}, {"team_id": "1582"}, {"team_id": "1615"}]}, {"team_id": "1453", "children": [{"team_id": "1580"}, {"team_id": "1563"}, {"team_id": "1659", "children": [{"team_id": "2015"}, {"team_id": "2169", "children": [{"team_id": "2583"}]}, {"team_id": "2190", "children": [{"team_id": "2619"}]}, {"team_id": "2141"}]}, {"team_id": "1529"}, {"team_id": "1620", "children": [{"team_id": "2097"}]}, {"team_id": "1661"}, {"team_id": "1512"}, {"team_id": "1534"}, {"team_id": "1525"}, {"team_id": "1559"}, {"team_id": "1679"}, {"team_id": "1703"}, {"team_id": "1727"}, {"team_id": "1753", "children": [{"team_id": "2101"}, {"team_id": "2055"}, {"team_id": "2065"}]}, {"team_id": "1546"}, {"team_id": "1570"}, {"team_id": "1594"}, {"team_id": "1606"}, {"team_id": "1755", "children": [{"team_id": "2148"}]}, {"team_id": "1781"}, {"team_id": "1813", "children": [{"team_id": "2129"}, {"team_id": "2157"}, {"team_id": "2210"}, {"team_id": "2209", "children": [{"team_id": "2610"}, {"team_id": "2654"}]}, {"team_id": "2222"}, {"team_id": "2263"}, {"team_id": "2292"}, {"team_id": "2120"}, {"team_id": "2232"}]}, {"team_id": "1681"}, {"team_id": "1729"}, {"team_id": "1807", "children": [{"team_id": "2147"}, {"team_id": "2149"}, {"team_id": "2177"}, {"team_id": "2016"}, {"team_id": "2094"}, {"team_id": "2254"}, {"team_id": "2042"}]}, {"team_id": "1833", "children": [{"team_id": "2106"}, {"team_id": "2216"}, {"team_id": "2244", "children": [{"team_id": "2693"}]}]}, {"team_id": "1859", "children": [{"team_id": "2246"}, {"team_id": "2324", "children": [{"team_id": "2490"}, {"team_id": "2520"}]}, {"team_id": "2359", "children": [{"team_id": "2719"}, {"team_id": "2796"}, {"team_id": "2761"}]}, {"team_id": "2389", "children": [{"team_id": "2680"}]}, {"team_id": "2449", "children": [{"team_id": "2708"}, {"team_id": "2746"}, {"team_id": "2780"}, {"team_id": "2776"}]}, {"team_id": "2478", "children": [{"team_id": "2743"}, {"team_id": "2757"}, {"team_id": "2741"}, {"team_id": "2718"}, {"team_id": "2749"}, {"team_id": "2753"}, {"team_id": "2801"}]}, {"team_id": "2525", "children": [{"team_id": "2679"}, {"team_id": "2596"}, {"team_id": "2711"}, {"team_id": "2769"}, {"team_id": "2763"}, {"team_id": "2747"}, {"team_id": "2804"}, {"team_id": "2788"}, {"team_id": "2717"}, {"team_id": "2710"}]}, {"team_id": "2555", "children": [{"team_id": "2648"}, {"team_id": "2777"}, {"team_id": "2729"}]}, {"team_id": "2159"}, {"team_id": "2419"}, {"team_id": "2538", "children": [{"team_id": "2690"}, {"team_id": "2678"}]}]}, {"team_id": "1911", "children": [{"team_id": "2121"}, {"team_id": "2175"}, {"team_id": "2081"}, {"team_id": "2112"}, {"team_id": "2187"}, {"team_id": "2164"}, {"team_id": "2192"}, {"team_id": "2195"}, {"team_id": "2266"}, {"team_id": "2296"}, {"team_id": "2227", "children": [{"team_id": "2420"}]}, {"team_id": "2140"}, {"team_id": "2168"}, {"team_id": "2237"}, {"team_id": "2238"}]}, {"team_id": "1541"}, {"team_id": "1505"}, {"team_id": "1642"}, {"team_id": "1553"}, {"team_id": "1587"}, {"team_id": "1628"}, {"team_id": "1497"}, {"team_id": "1655"}, {"team_id": "1779", "children": [{"team_id": "2082"}, {"team_id": "2401", "children": [{"team_id": "2714"}, {"team_id": "2774"}, {"team_id": "2787"}, {"team_id": "2629"}, {"team_id": "2659"}, {"team_id": "2723"}, {"team_id": "2658"}, {"team_id": "2688"}, {"team_id": "2750"}, {"team_id": "2744"}, {"team_id": "2702"}, {"team_id": "2794"}]}, {"team_id": "2440", "children": [{"team_id": "2675"}, {"team_id": "2705"}, {"team_id": "2740"}, {"team_id": "2703"}, {"team_id": "2771"}, {"team_id": "2803"}, {"team_id": "2698"}, {"team_id": "2770"}, {"team_id": "2618"}, {"team_id": "2786"}, {"team_id": "2789"}, {"team_id": "2485"}, {"team_id": "2739"}, {"team_id": "2637"}]}, {"team_id": "2435", "children": [{"team_id": "2604"}, {"team_id": "2625"}, {"team_id": "2742"}, {"team_id": "2772"}, {"team_id": "2792"}, {"team_id": "2764"}, {"team_id": "2640"}, {"team_id": "2676"}, {"team_id": "2713"}, {"team_id": "2602"}, {"team_id": "2692"}, {"team_id": "2722"}, {"team_id": "2653"}, {"team_id": "2607"}, {"team_id": "2662"}]}, {"team_id": "2433", "children": [{"team_id": "2773"}, {"team_id": "2785"}, {"team_id": "2566"}, {"team_id": "2699"}, {"team_id": "2806"}, {"team_id": "2726"}, {"team_id": "2778"}, {"team_id": "2652"}, {"team_id": "2712"}, {"team_id": "2732"}, {"team_id": "2795"}, {"team_id": "2733"}, {"team_id": "2800"}, {"team_id": "2755"}, {"team_id": "2756"}, {"team_id": "2762"}]}, {"team_id": "2114"}, {"team_id": "2212"}, {"team_id": "2353"}, {"team_id": "2371"}]}, {"team_id": "1705"}, {"team_id": "1885", "children": [{"team_id": "2203"}, {"team_id": "2231"}, {"team_id": "2259"}, {"team_id": "2249", "children": [{"team_id": "2663"}]}]}, {"team_id": "1630"}]}, {"team_id": "1254"}, {"team_id": "1184"}, {"team_id": "1222"}, {"team_id": "1241"}, {"team_id": "1238"}, {"team_id": "1255"}, {"team_id": "1233"}, {"team_id": "1277"}, {"team_id": "1262", "children": [{"team_id": "1460"}, {"team_id": "1494"}, {"team_id": "1514"}, {"team_id": "1520"}, {"team_id": "1568"}, {"team_id": "1544"}]}, {"team_id": "1229", "children": [{"team_id": "1537"}]}, {"team_id": "1273"}, {"team_id": "1272"}, {"team_id": "1297"}, {"team_id": "1317", "children": [{"team_id": "1562"}, {"team_id": "1637"}, {"team_id": "1574"}, {"team_id": "1646"}, {"team_id": "1670", "children": [{"team_id": "2174"}, {"team_id": "2264", "children": [{"team_id": "2588"}]}, {"team_id": "2271"}, {"team_id": "2236"}]}, {"team_id": "1694", "children": [{"team_id": "2154"}]}, {"team_id": "1666"}]}, {"team_id": "1392"}, {"team_id": "1279"}, {"team_id": "1271"}, {"team_id": "1263"}, {"team_id": "1327"}]}, {"team_id": "867"}, {"team_id": "713"}, {"team_id": "745"}, {"team_id": "761"}, {"team_id": "777"}, {"team_id": "787"}, {"team_id": "883"}, {"team_id": "899"}, {"team_id": "915"}, {"team_id": "931"}, {"team_id": "946"}, {"team_id": "962"}, {"team_id": "972", "children": [{"team_id": "1077"}, {"team_id": "1109"}, {"team_id": "1125"}, {"team_id": "1141"}]}, {"team_id": "1066"}, {"team_id": "729"}, {"team_id": "869"}, {"team_id": "930"}]}, {"team_id": "858", "children": [{"team_id": "950"}, {"team_id": "960"}, {"team_id": "958", "children": [{"team_id": "1153"}]}, {"team_id": "974"}, {"team_id": "983", "children": [{"team_id": "1287"}]}, {"team_id": "1015", "children": [{"team_id": "1220"}]}, {"team_id": "1023", "children": [{"team_id": "1293", "children": [{"team_id": "1536"}]}, {"team_id": "1295", "children": [{"team_id": "1673"}, {"team_id": "1649"}]}, {"team_id": "1320"}, {"team_id": "1336"}, {"team_id": "1183"}, {"team_id": "1246"}, {"team_id": "1206"}, {"team_id": "1289"}, {"team_id": "1338", "children": [{"team_id": "1440"}, {"team_id": "1459"}, {"team_id": "1591"}, {"team_id": "1639"}, {"team_id": "1676"}, {"team_id": "1571"}, {"team_id": "1636"}, {"team_id": "1660"}, {"team_id": "1624"}, {"team_id": "1700"}, {"team_id": "1507"}, {"team_id": "1658"}]}, {"team_id": "1311", "children": [{"team_id": "1550"}, {"team_id": "1547"}, {"team_id": "1586"}, {"team_id": "1610"}, {"team_id": "1635"}]}, {"team_id": "1190"}]}, {"team_id": "1038"}, {"team_id": "920"}, {"team_id": "966"}, {"team_id": "999"}, {"team_id": "942"}]}, {"team_id": "874", "children": [{"team_id": "856"}, {"team_id": "840"}, {"team_id": "976"}, {"team_id": "992", "children": [{"team_id": "1216"}]}, {"team_id": "993"}, {"team_id": "1031", "children": [{"team_id": "1300", "children": [{"team_id": "1569"}, {"team_id": "1617"}]}, {"team_id": "1315"}, {"team_id": "1284"}]}, {"team_id": "1056", "children": [{"team_id": "1200"}, {"team_id": "1288"}, {"team_id": "1280", "children": [{"team_id": "1565"}, {"team_id": "1577"}, {"team_id": "1603"}, {"team_id": "1627"}, {"team_id": "1651"}, {"team_id": "1601"}]}, {"team_id": "1282"}, {"team_id": "1298"}, {"team_id": "1318"}, {"team_id": "1303"}, {"team_id": "1331"}, {"team_id": "1347"}, {"team_id": "1363", "children": [{"team_id": "1608"}]}, {"team_id": "1404", "children": [{"team_id": "1662"}, {"team_id": "1634"}, {"team_id": "1748", "children": [{"team_id": "2028"}, {"team_id": "2054"}, {"team_id": "2080"}, {"team_id": "2180"}, {"team_id": "2182"}]}, {"team_id": "1774"}, {"team_id": "1778", "children": [{"team_id": "2151"}, {"team_id": "2123"}]}, {"team_id": "1804"}, {"team_id": "1830", "children": [{"team_id": "2130"}]}, {"team_id": "1856", "children": [{"team_id": "2096"}, {"team_id": "2127"}, {"team_id": "2188"}, {"team_id": "2208"}, {"team_id": "2217"}, {"team_id": "2245"}, {"team_id": "2273"}, {"team_id": "2325"}, {"team_id": "2328"}, {"team_id": "2358", "children": [{"team_id": "2646"}]}, {"team_id": "2181"}, {"team_id": "2283"}, {"team_id": "2388"}]}, {"team_id": "1870", "children": [{"team_id": "2196"}, {"team_id": "2186"}, {"team_id": "2214"}]}, {"team_id": "1896"}, {"team_id": "1922", "children": [{"team_id": "2279"}, {"team_id": "2221"}, {"team_id": "2268"}, {"team_id": "2311"}, {"team_id": "2341"}, {"team_id": "2309"}, {"team_id": "2372"}]}, {"team_id": "1936", "children": [{"team_id": "2185"}, {"team_id": "2213"}, {"team_id": "2258"}, {"team_id": "2354"}, {"team_id": "2136"}, {"team_id": "2206"}, {"team_id": "2155"}, {"team_id": "2183"}, {"team_id": "2267"}, {"team_id": "2297"}, {"team_id": "2344"}, {"team_id": "2150"}, {"team_id": "2286"}, {"team_id": "2317"}, {"team_id": "2107"}, {"team_id": "2161"}, {"team_id": "2364", "children": [{"team_id": "2766"}]}, {"team_id": "2394", "children": [{"team_id": "2669"}, {"team_id": "2728"}, {"team_id": "2779"}]}, {"team_id": "2050"}, {"team_id": "2265", "children": [{"team_id": "2645"}]}, {"team_id": "2345"}, {"team_id": "2272"}, {"team_id": "2331"}, {"team_id": "2189"}]}, {"team_id": "1986", "children": [{"team_id": "2234"}, {"team_id": "2291"}, {"team_id": "2321"}, {"team_id": "2381"}, {"team_id": "2287"}, {"team_id": "2316", "children": [{"team_id": "2696"}]}, {"team_id": "2346"}, {"team_id": "2351"}, {"team_id": "2391"}, {"team_id": "2431", "children": [{"team_id": "2767"}, {"team_id": "2752"}]}, {"team_id": "2199"}, {"team_id": "2225"}, {"team_id": "2376"}, {"team_id": "2406"}, {"team_id": "2436"}, {"team_id": "2466"}, {"team_id": "2494", "children": [{"team_id": "2805"}]}, {"team_id": "2152"}, {"team_id": "2253"}, {"team_id": "2347", "children": [{"team_id": "2791"}]}, {"team_id": "2375"}, {"team_id": "2407", "children": [{"team_id": "2748"}]}, {"team_id": "2030"}, {"team_id": "2108"}, {"team_id": "2122"}, {"team_id": "2380"}, {"team_id": "2295"}, {"team_id": "2487", "children": [{"team_id": "2781"}, {"team_id": "2790"}]}, {"team_id": "2385"}]}, {"team_id": "2012", "children": [{"team_id": "2294"}, {"team_id": "2134"}, {"team_id": "2280"}, {"team_id": "2304"}, {"team_id": "2334"}, {"team_id": "2337"}, {"team_id": "2204"}, {"team_id": "2229"}, {"team_id": "2176"}]}, {"team_id": "2038", "children": [{"team_id": "2224"}, {"team_id": "2235"}, {"team_id": "2255"}, {"team_id": "2282"}, {"team_id": "2312"}, {"team_id": "2211"}, {"team_id": "2307"}, {"team_id": "2275"}, {"team_id": "2207"}]}, {"team_id": "1654"}, {"team_id": "1680", "children": [{"team_id": "2046"}, {"team_id": "2072"}, {"team_id": "2110"}]}, {"team_id": "1604"}, {"team_id": "1800"}, {"team_id": "1844"}, {"team_id": "1960", "children": [{"team_id": "2138"}, {"team_id": "2166"}, {"team_id": "2194"}]}, {"team_id": "1682"}]}, {"team_id": "1264"}, {"team_id": "1357"}, {"team_id": "1381"}]}, {"team_id": "1044", "children": [{"team_id": "1067"}, {"team_id": "1249"}, {"team_id": "1304"}, {"team_id": "1324"}, {"team_id": "1356", "children": [{"team_id": "1657"}]}, {"team_id": "1358", "children": [{"team_id": "1613"}, {"team_id": "1595"}, {"team_id": "1683"}, {"team_id": "1733"}, {"team_id": "1759"}, {"team_id": "1785"}, {"team_id": "1619"}, {"team_id": "1811"}]}, {"team_id": "1345"}, {"team_id": "1361"}, {"team_id": "1340"}, {"team_id": "1380"}]}, {"team_id": "1116", "children": [{"team_id": "1309"}, {"team_id": "1387", "children": [{"team_id": "1479"}, {"team_id": "1621"}, {"team_id": "1645"}, {"team_id": "1717"}, {"team_id": "1743"}, {"team_id": "1769"}, {"team_id": "1803", "children": [{"team_id": "2285"}, {"team_id": "2374"}, {"team_id": "2360"}, {"team_id": "2398", "children": [{"team_id": "2793"}]}, {"team_id": "2193"}]}, {"team_id": "1669"}, {"team_id": "1693"}, {"team_id": "1732"}]}, {"team_id": "1270"}]}, {"team_id": "1132", "children": [{"team_id": "1333", "children": [{"team_id": "1648"}, {"team_id": "1714"}]}]}, {"team_id": "961"}, {"team_id": "1088"}, {"team_id": "601"}, {"team_id": "625"}, {"team_id": "855"}, {"team_id": "871"}, {"team_id": "1140"}, {"team_id": "987"}, {"team_id": "1003", "children": [{"team_id": "1155"}, {"team_id": "1166"}]}, {"team_id": "1030"}, {"team_id": "1065", "children": [{"team_id": "1275"}, {"team_id": "1257"}, {"team_id": "1274"}, {"team_id": "1240"}, {"team_id": "1278"}]}, {"team_id": "977"}, {"team_id": "1090"}, {"team_id": "581"}, {"team_id": "1114"}, {"team_id": "1046"}]}, {"team_id": "890", "children": [{"team_id": "1022"}, {"team_id": "1054"}, {"team_id": "1060"}, {"team_id": "1095"}, {"team_id": "1111"}, {"team_id": "936"}, {"team_id": "964"}, {"team_id": "1000"}, {"team_id": "1016"}, {"team_id": "1058"}, {"team_id": "1122", "children": [{"team_id": "1245"}, {"team_id": "1334"}, {"team_id": "1349", "children": [{"team_id": "1622"}, {"team_id": "1549"}]}, {"team_id": "1414", "children": [{"team_id": "1728"}, {"team_id": "1598"}, {"team_id": "1625"}, {"team_id": "1721"}]}, {"team_id": "1434", "children": [{"team_id": "1611"}, {"team_id": "1638"}, {"team_id": "1678"}, {"team_id": "1695"}, {"team_id": "1770"}, {"team_id": "1809"}, {"team_id": "1835"}, {"team_id": "1861", "children": [{"team_id": "2290"}, {"team_id": "2320"}, {"team_id": "2350"}]}, {"team_id": "1675"}, {"team_id": "1744"}]}, {"team_id": "1253"}, {"team_id": "1269"}, {"team_id": "1313"}, {"team_id": "1286"}, {"team_id": "1394"}, {"team_id": "1285"}]}, {"team_id": "1165", "children": [{"team_id": "1312"}, {"team_id": "1328"}, {"team_id": "1344", "children": [{"team_id": "1812"}, {"team_id": "1838"}, {"team_id": "1864", "children": [{"team_id": "2323", "children": [{"team_id": "2628"}, {"team_id": "2727"}, {"team_id": "2735"}, {"team_id": "2677"}, {"team_id": "2731"}, {"team_id": "2716"}]}, {"team_id": "2293"}]}, {"team_id": "1890"}]}, {"team_id": "1301"}, {"team_id": "1332"}, {"team_id": "1296"}, {"team_id": "1316"}]}, {"team_id": "1181"}, {"team_id": "933"}, {"team_id": "1006"}, {"team_id": "732"}, {"team_id": "748"}, {"team_id": "764"}, {"team_id": "780"}, {"team_id": "1092"}, {"team_id": "980"}, {"team_id": "1138", "children": [{"team_id": "1436", "children": [{"team_id": "1746"}, {"team_id": "1772"}, {"team_id": "1644"}, {"team_id": "1668"}, {"team_id": "1716"}, {"team_id": "1805", "children": [{"team_id": "2167"}]}, {"team_id": "1799"}, {"team_id": "1710"}, {"team_id": "1757"}, {"team_id": "1783"}, {"team_id": "1815", "children": [{"team_id": "2201"}]}, {"team_id": "1862"}, {"team_id": "1877"}, {"team_id": "1576"}, {"team_id": "1692"}, {"team_id": "1735"}, {"team_id": "1888", "children": [{"team_id": "2158"}, {"team_id": "2247"}]}]}, {"team_id": "1389", "children": [{"team_id": "1724"}]}]}, {"team_id": "716"}]}, {"team_id": "906", "children": [{"team_id": "1081"}, {"team_id": "1097"}, {"team_id": "1001"}, {"team_id": "1033"}, {"team_id": "1098"}, {"team_id": "1146", "children": [{"team_id": "1401"}]}, {"team_id": "1162", "children": [{"team_id": "1352"}, {"team_id": "1368"}, {"team_id": "1325"}, {"team_id": "1341"}, {"team_id": "1314"}]}, {"team_id": "793"}, {"team_id": "879"}, {"team_id": "1025", "children": [{"team_id": "1330"}, {"team_id": "1346"}]}, {"team_id": "963"}, {"team_id": "979"}, {"team_id": "1011", "children": [{"team_id": "1199"}]}, {"team_id": "1037"}, {"team_id": "1075"}, {"team_id": "1137", "children": [{"team_id": "1360"}, {"team_id": "1371"}, {"team_id": "1386", "children": [{"team_id": "1706"}]}]}, {"team_id": "1117"}, {"team_id": "1108"}, {"team_id": "967"}, {"team_id": "1049"}, {"team_id": "809"}, {"team_id": "995"}, {"team_id": "893"}, {"team_id": "944"}, {"team_id": "951"}]}, {"team_id": "922", "children": [{"team_id": "887"}, {"team_id": "903"}, {"team_id": "1024"}, {"team_id": "1028"}, {"team_id": "1070"}, {"team_id": "1118"}, {"team_id": "996"}, {"team_id": "1012"}, {"team_id": "990"}, {"team_id": "1008"}, {"team_id": "1120"}]}, {"team_id": "938", "children": [{"team_id": "861"}, {"team_id": "1086"}, {"team_id": "1083", "children": [{"team_id": "1374"}]}, {"team_id": "1096"}, {"team_id": "1052"}, {"team_id": "895"}, {"team_id": "885"}]}, {"team_id": "947", "children": [{"team_id": "873"}, {"team_id": "1036"}, {"team_id": "1005"}, {"team_id": "1021"}, {"team_id": "1069"}, {"team_id": "1085"}, {"team_id": "1133"}, {"team_id": "1149", "children": [{"team_id": "1329"}, {"team_id": "1398"}, {"team_id": "1378"}]}, {"team_id": "847"}, {"team_id": "863"}, {"team_id": "889"}, {"team_id": "1004"}, {"team_id": "924"}, {"team_id": "691"}, {"team_id": "707"}, {"team_id": "749"}, {"team_id": "781"}, {"team_id": "1078"}, {"team_id": "1094", "children": [{"team_id": "1302"}, {"team_id": "1388"}, {"team_id": "1383"}, {"team_id": "1423", "children": [{"team_id": "1672"}, {"team_id": "1725"}, {"team_id": "1751"}, {"team_id": "1777"}, {"team_id": "1899", "children": [{"team_id": "2488"}, {"team_id": "2197"}, {"team_id": "2382"}, {"team_id": "2257"}]}, {"team_id": "1925", "children": [{"team_id": "2315"}]}, {"team_id": "1951", "children": [{"team_id": "2274"}, {"team_id": "2454"}, {"team_id": "2424"}]}, {"team_id": "1907"}]}, {"team_id": "1444", "children": [{"team_id": "1738", "children": [{"team_id": "2218"}, {"team_id": "2089"}, {"team_id": "2143"}, {"team_id": "2162"}, {"team_id": "2262", "children": [{"team_id": "2758"}, {"team_id": "2694"}]}, {"team_id": "2117"}, {"team_id": "2239"}, {"team_id": "2252"}, {"team_id": "2063"}, {"team_id": "2269"}]}, {"team_id": "1790"}, {"team_id": "1825"}, {"team_id": "1851", "children": [{"team_id": "2179"}]}, {"team_id": "1764"}]}, {"team_id": "1465"}, {"team_id": "1403"}]}, {"team_id": "1126", "children": [{"team_id": "1348"}]}, {"team_id": "1142", "children": [{"team_id": "1319"}, {"team_id": "1369"}]}, {"team_id": "1174", "children": [{"team_id": "1307"}, {"team_id": "1326"}, {"team_id": "1365"}, {"team_id": "1410"}, {"team_id": "1424"}, {"team_id": "1342"}]}, {"team_id": "1177"}, {"team_id": "1193", "children": [{"team_id": "1351"}, {"team_id": "1350"}]}, {"team_id": "1197", "children": [{"team_id": "1294"}, {"team_id": "1310"}, {"team_id": "1375", "children": [{"team_id": "1573"}, {"team_id": "1597"}, {"team_id": "1600"}]}, {"team_id": "1415", "children": [{"team_id": "1677"}, {"team_id": "1730"}, {"team_id": "1756"}, {"team_id": "1782"}, {"team_id": "1808", "children": [{"team_id": "2250"}]}, {"team_id": "1860", "children": [{"team_id": "2240"}]}, {"team_id": "1852"}, {"team_id": "1834"}]}, {"team_id": "1435", "children": [{"team_id": "1715"}, {"team_id": "1741"}, {"team_id": "1643"}]}, {"team_id": "1475", "children": [{"team_id": "1701"}, {"team_id": "1742"}, {"team_id": "1829", "children": [{"team_id": "2077"}, {"team_id": "2133"}, {"team_id": "2172"}, {"team_id": "2103"}]}, {"team_id": "1881"}, {"team_id": "1671"}, {"team_id": "1723"}, {"team_id": "1855"}]}, {"team_id": "1495", "children": [{"team_id": "1758"}]}, {"team_id": "1395"}]}, {"team_id": "815"}, {"team_id": "988"}, {"team_id": "1020"}, {"team_id": "1053"}, {"team_id": "1171", "children": [{"team_id": "1258"}, {"team_id": "1291"}, {"team_id": "1366"}, {"team_id": "1290"}, {"team_id": "1306"}, {"team_id": "1322"}, {"team_id": "1354"}, {"team_id": "1411", "children": [{"team_id": "1718"}, {"team_id": "1762"}, {"team_id": "1754"}, {"team_id": "1788"}]}, {"team_id": "1455"}, {"team_id": "1466", "children": [{"team_id": "1711"}]}, {"team_id": "1431", "children": [{"team_id": "1702"}, {"team_id": "1761"}, {"team_id": "1734"}, {"team_id": "1687"}, {"team_id": "1763"}, {"team_id": "1789"}, {"team_id": "1841"}, {"team_id": "1908", "children": [{"team_id": "2288"}, {"team_id": "2322"}]}, {"team_id": "1934"}, {"team_id": "1952", "children": [{"team_id": "2298"}, {"team_id": "2226"}, {"team_id": "2299"}, {"team_id": "2220"}, {"team_id": "2260"}, {"team_id": "2251"}]}, {"team_id": "1978"}, {"team_id": "1971", "children": [{"team_id": "2303"}, {"team_id": "2327"}, {"team_id": "2366"}, {"team_id": "2437"}, {"team_id": "2329"}, {"team_id": "2495"}, {"team_id": "2568", "children": [{"team_id": "2798"}, {"team_id": "2799"}]}, {"team_id": "2410"}, {"team_id": "2173"}]}, {"team_id": "1699"}, {"team_id": "1663"}, {"team_id": "1867"}, {"team_id": "1996", "children": [{"team_id": "2318"}, {"team_id": "2348", "children": [{"team_id": "2802"}]}, {"team_id": "2356"}, {"team_id": "2326"}, {"team_id": "2386"}, {"team_id": "2163"}, {"team_id": "2276", "children": [{"team_id": "2760"}]}, {"team_id": "2363"}, {"team_id": "2393"}, {"team_id": "2474"}, {"team_id": "2377"}, {"team_id": "2476"}, {"team_id": "2505"}, {"team_id": "2405"}, {"team_id": "2470"}, {"team_id": "2510"}, {"team_id": "2529"}, {"team_id": "2559"}, {"team_id": "2551", "children": [{"team_id": "2768"}]}, {"team_id": "2378"}, {"team_id": "2384"}, {"team_id": "2446"}, {"team_id": "2480"}]}]}, {"team_id": "1372"}, {"team_id": "1391"}, {"team_id": "1456", "children": [{"team_id": "1768"}, {"team_id": "1794"}, {"team_id": "1719"}]}]}, {"team_id": "597"}, {"team_id": "836"}, {"team_id": "1158"}, {"team_id": "1203", "children": [{"team_id": "1417"}, {"team_id": "1437", "children": [{"team_id": "1760"}, {"team_id": "1786"}]}, {"team_id": "1422", "children": [{"team_id": "1767"}]}, {"team_id": "1443", "children": [{"team_id": "1726"}, {"team_id": "1752"}]}, {"team_id": "1462", "children": [{"team_id": "1826", "children": [{"team_id": "2090"}, {"team_id": "2116"}, {"team_id": "2200"}, {"team_id": "2205"}, {"team_id": "2261"}, {"team_id": "2228"}, {"team_id": "2233"}]}, {"team_id": "1898"}, {"team_id": "1684"}, {"team_id": "1708"}, {"team_id": "1930"}]}, {"team_id": "1482", "children": [{"team_id": "1745"}, {"team_id": "1771"}, {"team_id": "1868"}, {"team_id": "1871"}, {"team_id": "1845"}]}, {"team_id": "1384"}, {"team_id": "1445"}, {"team_id": "1400", "children": [{"team_id": "1713"}, {"team_id": "1739"}, {"team_id": "1791"}, {"team_id": "1817"}, {"team_id": "1843", "children": [{"team_id": "2256"}]}, {"team_id": "1869"}, {"team_id": "1765"}]}, {"team_id": "1454", "children": [{"team_id": "1787"}, {"team_id": "1839"}, {"team_id": "1872"}, {"team_id": "1846"}]}, {"team_id": "1362"}]}]}]}

  var margin = {top: 20, right: 120, bottom: 20, left: 120},
      width = 900 - margin.right - margin.left,
      height = 900 - margin.top - margin.bottom;

  var i = 0,
      duration = 750,
      root;

  var tree = d3.layout.tree()
      .size([height, width]);

  var diagonal = d3.svg.diagonal()
      .projection(function(d) { return [d.y, d.x]; });

  var svg = d3.select("#graph").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // d3.json(treeJson, function(error, flare) {
    // if (error) throw "error";
    // debugger
    root = treeJson;
    root.x0 = height / 2;
    root.y0 = 0;

    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    root.children.forEach(collapse);
    update(root);
  // });

  d3.select(self.frameElement).style("height", "1000px");

  function update(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) { d.y = d.depth * 120; });

    // Update the nodes…
    var node = svg.selectAll("g.node")
        .data(nodes, function(d) { return d.id || (d.id = ++i); });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .on("click", function(d) {
                                  click(d);
                                  handleClick(d);
                                  d3.selectAll(".focus").classed("focus", false);
                                  d3.select(this).classed("focus", true);

                                });


    nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("fill", function(d) { return d._children ? "#B21212" : "#fff"; });

    nodeEnter.append("text")
        .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
        .attr("dy", ".35em")
        .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
        .text(function(d) { return d.name; })
        .style("fill-opacity", 1e-6);

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

    nodeUpdate.select("circle")
        .attr("r", 4.5)
        .style("fill", function(d) { return d._children ? "#0971B2" : "#fff"; });

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
        .remove();

    nodeExit.select("circle")
        .attr("r", 1e-6);

    nodeExit.select("text")
        .style("fill-opacity", 1e-6);

    // Update the links…
    var link = svg.selectAll("path.link")
        .data(links, function(d) { return d.target.id; });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
          var o = {x: source.x0, y: source.y0};
          return diagonal({source: o, target: o});
        });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function(d) {
          var o = {x: source.x, y: source.y};
          return diagonal({source: o, target: o});
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  // Toggle children on click.
  function click(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }
}



// export const setUpGraph = function(data, type, y, x=null, svgNode) {

//   d3.select(window).on('resize', resize);

//   d3.select('#graph').remove()

//   // let data = JSON.parse(data);
//   let xScale;
//   let yScale;

//   //get maximums from data
//   let xMax = d3.max(data, function(d) {
//     return d[x];
//   });

//   let yMax = d3.max(data, function(d) {
//     return d[y];
//   });

//   let xMin = d3.min(data, function(d) {
//     return d[x];
//   });

//   // find the means for trend line
//   let xMean = d3.mean(data, function(d) {
//     return d[x];
//   });
//   let yMean = d3.mean(data, function(d) {
//     return d[y];
//   });
//   let mTop = 0;
//   let mBot = 0;
//   let mB;
//   // let rTop = 0;
//   // let rBot = 0;
//   for (let dat in data) {
//     mTop += ((data[dat][x] - xMean) * (data[dat][y] - yMean));
//     mB = data[dat][x] - xMean;
//     mBot += Math.pow(mB, 2);
//   }

//   // find the least squares slope and intercept
//   let m = mTop / mBot;
//   let b = yMean - m * (xMean - xMin);

//   // remove old graph and then create new
//   // d3.select('svg').remove();

//   let svg = d3.select(svgNode).append('svg')
//         .attr('width', '90%')
//         .attr('height', 400)
//         .attr('id', 'graph');

//   let wid = svg.node().getBoundingClientRect().width;



//   //create d3 scales and axes
//   if (type === "player") {
//     let timeMin = xMin-1 + ""
//     xScale = d3.scaleTime()
//         .domain( [new Date(xMin - 1 ,0,1) , new Date(xMax, 0, 1)] )
//         .range([30,wid-60])
//         .nice( d3.timeYear );
//   } else {
//     xScale = d3.scaleLinear()
//       .domain([0, xMax])
//       .range([30,wid-60])
//   }

//   yScale = d3.scaleLinear()
//           .domain([0, yMax])
//           .range([400 - 30, 30])
//           .nice();

//   let xAxis = d3.axisBottom(xScale)
//           .ticks(5);

//   let yAxis = d3.axisLeft(yScale)
//         .ticks(5);

//   let trendLine = d3.line()
//     .x(function(d) { return d[0]})
//     .y(function(d) { return d[1]})
//     // .interpolate('linear');


//   const leastSquares = function() {
//     let xStart, yStart;
//     if (b < 0) {
//       xStart = xScale(-1 * b / m);
//       yStart = yScale(0);
//     } else {
//       xStart = xScale(0);
//       yStart = yScale(b);
//     }
//     let xEnd = xScale(xMax);
//     let yEnd = yScale(m * xMax + b);
//     if (type === "player") {xStart = xScale(new Date(xMin-1, 0, 1)); xEnd = xScale(new Date(xMax+1000, 0,1))}
    

//     return [[xStart, yStart], [xEnd, yEnd]];
//   };
//   // console.log([xMax, xEnd, m , b, m * xMax + b, yEnd, yStart, xStart])

//   // leastSquares = leastSquares();


//   // bind data to svg circles as datapoints
//   let circles = svg.selectAll("circle")
//       .data(data)
//       .enter()
//       .append("circle");

//   // apply data to position on scatterplot
//   if (type === "player") {
//     circles.attr("cx", function(d) {
//       return xScale(new Date(d[x],0,1));
//     })
//       .attr("cy", function(d) {
//         return yScale(d[y]);
//       })
//       .attr("r", 3)
//   } else {
//     circles.attr("cx", function(d) {
//       return xScale(d[x]);
//     })
//       .attr("cy", function(d) {
//         return yScale(d[y]);
//       })
//       .attr("r", 3)
//       .attr("id", function(d) {
//         return d['playerid'];
//       })
//       .attr("data-playerid", function(d){
//         return d['playerid']
//       })
//       .on("mouseenter", function(d) {
//         let circleId = d['playerid_id'];
//         let circleX = d[x];
//         let circleY = d[y];
//         let c = $('#' + circleId);
//         c.parent().append("<div class='datatext' fill='red' font-size='20px' x='" +
//                 xScale(circleX) + "' y='" + yScale(circleY) + "'>"+ circleId + circleX + ","+ circleY + "</div>")
//       })
//       .on("mouseleave", function(d){

//       })
//       .on("click", function(d) {
//         // window.location.href = "players/" + d['playerid'] + "?year=" + $('#year').val() +
//         //   "&ystat=" + y + '&xstat=' + x

//       })
//       .append("title")
//         // append a tooltip title to each point
//         .text(function(d) {
//           return d['yearid'] + "\nx:" + d[x] + ", y:" + d[y];
//         });
//     }

//   // add and position axes and add titles
//   if (type === "player") {
//     svg.append('g')
//       .attr("class", "x axis")
//       .attr('transform', 'translate(0,' + 370 +')')
//       .call(xAxis)
//       .append("text")
//       .attr("y", -10)
//       .attr("x", wid - 60)
//       .attr("id", "x-label")
//       .style("text-anchor", "middle")
//       .text("Year");
//   } else {
//     svg.append('g')
//       .attr("class", "x axis")
//       .attr('transform', 'translate(0,' + 370 +')')
//       .call(xAxis)
//       .append("text")
//       .attr("y", -10)
//       .attr("x", wid - 60)
//       .attr("id", "x-label")
//       .style("text-anchor", "middle")
//       // .text(statDict[x]);
//   }

//   svg.append('g')
//     .attr("class", "y axis")
//     .attr('transform', 'translate('+ 30 +', 0)')
//     .call(yAxis)
//     .append("text")
//     .attr("transform", "rotate(-90)")
//     .attr("y", 12)
//     .attr("x", -23)
//     .style("text-anchor", "end")
//     // .text(statDict[y]);

//   // svg.append("path")
//   //   .attr('d', trendLine(leastSquares()))
//   //   .attr("stroke", "red")
//   //       .attr("stroke-width", 2)
//   //       .attr("fill", "none")
//   //       .attr("class", "line");

//   const resize = () => {
//     debugger

//     let width = parseInt(d3.select("#graph").style("width")) - 60;
//     let height = parseInt(d3.select("#graph").style("height")) - 30;

//     // Update the range of the scale with new width/height
//     xScale.range([30, width]).nice(d3.time.year);

//     // Update the axis with the new scale
//     svg.select('.x')
//       .call(xAxis);

//     svg.select('.y')
//       .call(yAxis);

//     let x = svg.select('#x-label')
//       .attr('x', width)

//     // Recalculate the positions of datapoints
//     if (x.text() === "Year")
//       circles.attr("cx", function(d) {
//       return xScale(new Date(d[0],0,1));
//     })
//     .attr("cy", function(d) {
//       return yScale(d[1]);
//     })
//     else {
//       circles.attr("cx", function(d) {
//         return xScale(d[0]);
//       })
//       .attr("cy", function(d) {
//         return yScale(d[1]);
//       })

//     }
//     svg.select('.line')
//       .attr('d', trendLine(leastSquares()))

//   }

// };
