let dataJson = `[
   {
      "GenreName":"Rock",
      "TotalRevenue":826.65
   },
   {
      "GenreName":"Latin",
      "TotalRevenue":382.14
   },
   {
      "GenreName":"Metal",
      "TotalRevenue":261.36
   },
   {
      "GenreName":"Alternative & Punk",
      "TotalRevenue":241.56
   },
   {
      "GenreName":"TV Shows",
      "TotalRevenue":93.53
   },
   {
      "GenreName":"Jazz",
      "TotalRevenue":79.20
   }
]`

let dataJson2 = `[
   {
      "GenreName2":"Rock",
      "TotalRevenue2":155.43
   },
   {
      "GenreName2":"Latin",
      "TotalRevenue2":90.09
   },
   {
      "GenreName2":"Metal",
      "TotalRevenue2":63.36
   },
   {
      "GenreName2":"Alternative & Punk",
      "TotalRevenue2":49.50
   },
   {
      "GenreName2":"TV Shows",
      "TotalRevenue2":27.86
   },
   {
      "GenreName2":"Jazz",
      "TotalRevenue2":21.78
   }
]`

let dataJson3 = `[
\t{
\t\t"GenreName3" : "Rock",
\t\t"TotalRevenue3" : 20.79
\t},
\t{
\t\t"GenreName3" : "Metal",
\t\t"TotalRevenue3" : 5.94
\t},
\t{
\t\t"GenreName3" : "Latin",
\t\t"TotalRevenue3" : 3.96
\t},
\t{
\t\t"GenreName3" : "Alternative & Punk",
\t\t"TotalRevenue3" : 3.96
\t},
\t{
\t\t"GenreName3" : "Pop",
\t\t"TotalRevenue3" : 2.97
\t}
]`

let dataJson4 = `[
\t{
\t\t"GenreName4" : "Rock",
\t\t"TotalRevenue4" : 105.93
\t},
\t{
\t\t"GenreName4" : "Latin",
\t\t"TotalRevenue4" : 59.40
\t},
\t{
\t\t"GenreName4" : "Metal",
\t\t"TotalRevenue4" : 39.60
\t},
\t{
\t\t"GenreName4" : "Alternative & Punk",
\t\t"TotalRevenue4" : 35.64
\t},
\t{
\t\t"GenreName4" : "Jazz",
\t\t"TotalRevenue4" : 12.87
\t},
\t{
\t\t"GenreName4" : "Bossa Nova",
\t\t"TotalRevenue4" : 6.93
\t}
]`

let dataJson5 = `[
\t{
\t\t"GenreName5" : "Rock",
\t\t"TotalRevenue5" : 36.63
\t},
\t{
\t\t"GenreName5" : "Latin",
\t\t"TotalRevenue5" : 30.69
\t},
\t{
\t\t"GenreName5" : "Metal",
\t\t"TotalRevenue5" : 19.80
\t},
\t{
\t\t"GenreName5" : "Alternative & Punk",
\t\t"TotalRevenue5" : 8.91
\t},
\t{
\t\t"GenreName5" : "Reggae",
\t\t"TotalRevenue5" : 4.95
\t},
\t{
\t\t"GenreName5" : "Jazz",
\t\t"TotalRevenue5" : 3.96
\t}
]`

let dataJson6 = `[
\t{
\t\t"Country" : "USA",
\t\t"TotalSales" : 494
\t},
\t{
\t\t"Country" : "Canada",
\t\t"TotalSales" : 304
\t},
\t{
\t\t"Country" : "Brazil",
\t\t"TotalSales" : 190
\t},
\t{
\t\t"Country" : "France",
\t\t"TotalSales" : 190
\t},
\t{
\t\t"Country" : "Germany",
\t\t"TotalSales" : 152  
\t},
\t{
\t\t"Country" : "United Kingdom",
\t\t"TotalSales" : 114
\t}]`




let data6 = JSON.parse(dataJson6)

let data5 = JSON.parse(dataJson5)

let data4 = JSON.parse(dataJson4)

let data3 = JSON.parse(dataJson3)

let data2 = JSON.parse(dataJson2)

let data = JSON.parse(dataJson)

let dataJsonAlbumOA = `[
    {
        "AlbumTitle" : "BG (C), Season 1",
        "TotalRevenueAlbum" : 35.82
    },
    {
        "AlbumTitle" : "Minha Historia",
        "TotalRevenueAlbum" : 34.65
    },
    {
        "AlbumTitle" : "The Office, Season 3",
        "TotalRevenueAlbum" : 31.84
    },
    {
        "AlbumTitle" : "Heroes, Season 1",
        "TotalRevenueAlbum" : 25.87
    },
    {
        "AlbumTitle" : "Lost, Season 2",
        "TotalRevenueAlbum" : 25.87
    }]`

let dataAlbumOA = JSON.parse(dataJsonAlbumOA)

let dataJsonAlbumUSA = `[
    {
        "AlbumTitleUSA" : "The Office, Season 3",
        "TotalRevenueAlbumUSA" : 27.86
    },
    {
        "AlbumTitleUSA" : "Unplugged",
        "TotalRevenueAlbumUSA" : 10.89
    },
    {
        "AlbumTitleUSA" : "Prenda Minha",
        "TotalRevenueAlbumUSA" : 10.89
    },
    {
        "AlbumTitleUSA" : "Chill: Brazil (Disc 2)",
        "TotalRevenueAlbumUSA" : 9.90
    },
    {
        "AlbumTitleUSA" : "Back to Black",
        "TotalRevenueAlbumUSA" : 8.91
    }]`

let dataAlbumUSA = JSON.parse(dataJsonAlbumUSA)

let dataJsonAlbumDK = `[
    {
        "AlbumTitleDK" : "Mezmerize",
        "TotalRevenueAlbumDK" : 3.96
    },
    {
        "AlbumTitleDK" : "Chronicle, Vol. 1",
        "TotalRevenueAlbumDK" : 3.96
    },
    {
        "AlbumTitleDK" : "Instant Karma: The Amnesty International Campaign to Save Darfur",
        "TotalRevenueAlbumDK" : 2.97
    },
    {
        "AlbumTitleDK" : "Speak of the Devil",
        "TotalRevenueAlbumDK" : 2.97
    },
    {
        "AlbumTitleDK" : "Chronicle, Vol. 2",
        "TotalRevenueAlbumDK" : 2.97
    }]`

let dataAlbumDK = JSON.parse(dataJsonAlbumDK)

let dataJsonAlbumCA = `[
    {
        "AlbumTitleCA" : "Arquivo II",
        "TotalRevenueAlbumCA" : 8.91
    },
    {
        "AlbumTitleCA" : "The Best Of R.E.M.: The IRS Years",
        "TotalRevenueAlbumCA" : 7.92
    },
    {
        "AlbumTitleCA" : "Vinícius De Moraes - Sem Limite",
        "TotalRevenueAlbumCA" : 6.93
    },
    {
        "AlbumTitleCA" : "Living After Midnight",
        "TotalRevenueAlbumCA" : 5.94
    },
    {
        "AlbumTitleCA" : "Greatest Hits I",
        "TotalRevenueAlbumCA" : 5.94
    }]`

let dataAlbumCA = JSON.parse(dataJsonAlbumCA)

let dataJsonAlbumUK = `[
    {
        "AlbumTitleUK" : "Load",
        "TotalRevenueAlbumUK" : 4.95
    },
    {
        "AlbumTitleUK" : "No Prayer For The Dying",
        "TotalRevenueAlbumUK" : 4.95
    },
    {
        "AlbumTitleUK" : "Lulu Santos - RCA 100 Anos De Música - Álbum 02",
        "TotalRevenueAlbumUK" : 3.96
    },
    {
        "AlbumTitleUK" : "American Idiot",
        "TotalRevenueAlbumUK" : 3.96
    },
    {
        "AlbumTitleUK" : "Barulhinho Bom",
        "TotalRevenueAlbumUK" : 3.96
    }]`

let dataAlbumUK = JSON.parse(dataJsonAlbumUK)

let dataJsonAlbumTSC = `[
    {
        "CustomerCountryTSC" : "USA",
        "TotalRevenueTSC" : 523.06
    },
    {
        "CustomerCountryTSC" : "Canada",
        "TotalRevenueTSC" : 303.96
    },
    {
        "CustomerCountryTSC" : "France",
        "TotalRevenueTSC" : 195.10
    },
    {
        "CustomerCountryTSC" : "Brazil",
        "TotalRevenueTSC" : 190.10
    },
    {
        "CustomerCountryTSC" : "Germany",
        "TotalRevenueTSC" : 156.48
    }]`

let dataAlbumTSC = JSON.parse(dataJsonAlbumTSC)

