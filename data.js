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

let dataJsonAlbumCanada = `[
    {
        "AlbumTitle" : "Arquivo II",
        "TotalRevenue" : 8.91
    },
    {
        "AlbumTitle" : "The Best Of R.E.M.: The IRS Years",
        "TotalRevenue" : 7.92
    },
    {
        "AlbumTitle" : "Vinícius De Moraes - Sem Limite",
        "TotalRevenue" : 6.93
    },
    {
        "AlbumTitle" : "Living After Midnight",
        "TotalRevenue" : 5.94
    },
    {
        "AlbumTitle" : "Greatest Hits I",
        "TotalRevenue" : 5.94
    }]`


let dataJsonAlbumUK = `[
    {
        "AlbumTitle" : "Load",
        "TotalRevenue" : 4.95
    },
    {
        "AlbumTitle" : "No Prayer For The Dying",
        "TotalRevenue" : 4.95
    },
    {
        "AlbumTitle" : "Lulu Santos - RCA 100 Anos De Música - Álbum 02",
        "TotalRevenue" : 3.96
    },
    {
        "AlbumTitle" : "American Idiot",
        "TotalRevenue" : 3.96
    },
    {
        "AlbumTitle" : "Barulhinho Bom",
        "TotalRevenue" : 3.96
    }]`

let dataJsonAlbumDK = `[
    {
        "AlbumTitle" : "Mezmerize",
        "TotalRevenue" : 3.96
    },
    {
        "AlbumTitle" : "Chronicle, Vol. 1",
        "TotalRevenue" : 3.96
    },
    {
        "AlbumTitle" : "Instant Karma: The Amnesty International Campaign to Save Darfur",
        "TotalRevenue" : 2.97
    },
    {
        "AlbumTitle" : "Speak of the Devil",
        "TotalRevenue" : 2.97
    },
    {
        "AlbumTitle" : "Chronicle, Vol. 2",
        "TotalRevenue" : 2.97
    }]`

let dataAlbumDK = JSON.parse(dataJsonAlbumDK)
let dataAlbumUK = JSON.parse(dataJsonAlbumUK)
let dataAlbumCanada = JSON.parse(dataJsonAlbumCanada)
let dataAlbumUSA = JSON.parse(dataJsonAlbumUSA)
let dataAlbumOA = JSON.parse(dataJsonAlbumOA)

let dataJsonArtistOverall = `[
	{
		"ArtistName" : "Os Paralamas Do Sucesso",
		"TotalSales" : 16
	},
	{
		"ArtistName" : "Metallica",
		"TotalSales" : 15
	},
	{
		"ArtistName" : "Led Zeppelin",
		"TotalSales" : 14
	},
	{
		"ArtistName" : "Iron Maiden",
		"TotalSales" : 9
	},
	{
		"ArtistName" : "R.E.M.",
		"TotalSales" : 9
	},
	{
		"ArtistName" : "Kiss",
		"TotalSales" : 9
	}
]`

let dataJsonArtistDenmark = `[[
\t{
\t\t"ArtistName" : "Creedence Clearwater Revival",
\t\t"TotalSales" : 7
\t},
\t{
\t\t"ArtistName" : "System Of A Down",
\t\t"TotalSales" : 4
\t},
\t{
\t\t"ArtistName" : "Red Hot Chili Peppers",
\t\t"TotalSales" : 4
\t},
\t{
\t\t"ArtistName" : "U2",
\t\t"TotalSales" : 3
\t},
\t{
\t\t"ArtistName" : "Ozzy Osbourne",
\t\t"TotalSales" : 3
\t},
\t{
\t\t"ArtistName" : "Smashing Pumpkins",
\t\t"TotalSales" : 3
\t}
]`

let dataJsonArtistCanada = `[
\t{
\t\t"ArtistName" : "Os Paralamas Do Sucesso",
\t\t"TotalSales" : 16
\t},
\t{
\t\t"ArtistName" : "Metallica",
\t\t"TotalSales" : 15
\t},
\t{
\t\t"ArtistName" : "Led Zeppelin",
\t\t"TotalSales" : 14
\t},
\t{
\t\t"ArtistName" : "Iron Maiden",
\t\t"TotalSales" : 9
\t},
\t{
\t\t"ArtistName" : "R.E.M.",
\t\t"TotalSales" : 9
\t},
\t{
\t\t"ArtistName" : "Kiss",
\t\t"TotalSales" : 9
\t}
]`

let dataJsonArtistUSA = `[
\t{
\t\t"ArtistName" : "Iron Maiden",
\t\t"TotalSales" : 34
\t},
\t{
\t\t"ArtistName" : "Metallica",
\t\t"TotalSales" : 27
\t},
\t{
\t\t"ArtistName" : "U2",
\t\t"TotalSales" : 23
\t},
\t{
\t\t"ArtistName" : "The Office",
\t\t"TotalSales" : 17
\t},
\t{
\t\t"ArtistName" : "Deep Purple",
\t\t"TotalSales" : 15
\t},
\t{
\t\t"ArtistName" : "Eric Clapton",
\t\t"TotalSales" : 14
\t}
]`

let dataJsonArtistUK = `[
\t{
\t\t"ArtistName" : "Metallica",
\t\t"TotalSales" : 9
\t},
\t{
\t\t"ArtistName" : "Iron Maiden",
\t\t"TotalSales" : 8
\t},
\t{
\t\t"ArtistName" : "Led Zeppelin",
\t\t"TotalSales" : 7
\t},
\t{
\t\t"ArtistName" : "Lulu Santos",
\t\t"TotalSales" : 7
\t},
\t{
\t\t"ArtistName" : "Cidade Negra",
\t\t"TotalSales" : 5
\t},
\t{
\t\t"ArtistName" : "R.E.M.",
\t\t"TotalSales" : 5
\t}
]`

dataArtistOverall = JSON.parse(dataJsonArtistOverall)
dataArtistUSA = JSON.parse(dataJsonArtistUSA)
dataArtistCanada = JSON.parse(dataJsonArtistCanada)
dataArtistUK = JSON.parse(dataJsonArtistUK)
dataArtistDenmark = JSON.parse(dataJsonArtistDenmark)