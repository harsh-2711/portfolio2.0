---
title: Magic QR
---

Who needs the internet when you have QR codes? We certainly didn't!

```js
GET /v1/projects?id=magic_qr&meta=true
```

```js
{
	"name": "Magic QR",
	"description": "Offline Data Transmission via QR Codes",
	"startDate": "20-10-2019",
	"endDate": "21-10-2019",
	"meta": {
		"hackathon_name": "Hackout Hackathon",
		"ranking": 2,
		"ranking_title": "Runner up",
		"team_size": 2
	}
	"status": 200
}
```

### Idea

We developed a broadcasting service that can transfer compressed data using a series of QR codes. It's like playing a high-tech game of pass-the-parcel, but with data.

### Solution

1. Data is compressed and split into chunks
2. Each chunk is converted into a QR code
3. QR codes are displayed in sequence
4. Receiving device scans the QR codes and reconstructs the data

### Impact

- Sharing information in areas with no internet connectivity
- Secure data transfer without using traditional networks
- Interactive museum exhibits or educational tools

