---
title: Lyearn
---

My journey at Lyearn was marked by significant contributions across various domains, from backend optimization to infrastructure management and AI implementation.

## Product Engineer
```js
GET /v1/workExperience?company=lyearn
```

```js
{
	"position": "Product Engineer",
	"startDate": "01-01-2021",
	"endDate": "01-04-2022",
	"skills": [
		"GraphQL",
		"MongoDB",
		"Redis",
		"Kafka",
		"gRPC",
		"NodeJS",
		"TypeScript"
	],
	"status": 200
}
```

## Key Highlights

When I joined Lyearn, one of our primary challenges was system performance. I took on the task of elevating our backend system, achieving almost a **30%** improvement in overall latency of core APIs. This wasn't just about speed; it was about setting best software design practices for the team, creating a foundation for scalable growth.

<br />
As our system grew, so did our need for robust infrastructure. I pioneered the establishment and management of core infrastructure components, ensuring seamless running and easy monitoring of micro-services on Kubernetes. This infrastructure cycle included implementing comprehensive metrics and monitoring systems, giving us very detailed visibility into our application's performance.

### Integrations Module

<br />
<div class="custom-cover-image">

![lyearn-integration](/img/lyearn-integration.png)

</div>
<br />

To expand Lyearn's capabilities, I designed and developed a generic integrations module with extensible APIs. This module expanded our third-party application integration efficiency by 50%, opening up new possibilities for our platform.

## Product Engineer II
```js
GET /v2/workExperience?company=lyearn
```

```js
{
	"position": "Product Engineer II",
	"startDate": "01-04-2022",
	"endDate": "01-04-2023",
	"skills": [
		"REST",
		"PostgreSQL",
		"Elasticsearch",
		"Kubernetes",
		"Terraform",
		"Helm",
		"ELK Stack",
		"Prometheus Monitoring Stack"
	],
	"status": 200
}
```

## Key Highlights

### Reporting Engine

<br />
<div class="custom-cover-image">

![lyearn-reporting](/img/lyearn-reporting.png)

</div>
<br />

One of the most impactful projects was the development of a dynamic yet generic reporting module. This module could process tens of millions of documents in parallel, providing insightful data using system-generated metrics. It was a game-changer for our data analysis capabilities. You can find the details of the implementation in [this Medium blog](https://blog.lyearn.com/how-we-built-a-reporting-module-powered-by-user-driven-custom-es-queries-96f206d886f8).

### BOYS (Bring Your Own SAML)

<br />
<div class="custom-cover-image">

![lyearn-saml](/img/lyearn-saml.png)

</div>
<br />

Security was always a top priority. I implemented a generic SAML (Security Assertion Markup Language) solution, enhancing our authentication processes and making it easier for enterprise clients to integrate with our system.

## Senior Product Engineer
```js
GET /v3/workExperience?company=lyearn
```

```js
{
	"position": "Senior Product Engineer",
	"startDate": "01-04-2023",
	"endDate": "15-01-2024",
	"skills": [
		"Federated GraphQL",
		"Golang"
	],
	"status": 200
}
```

## Key Highlights

### Optimizing for Scale and Performance
As Lyearn grew, we faced new challenges in scalability and performance. I led several key initiatives to address these:

1. **Database and Search Optimization:** I maintained authoritative expertise on Elasticsearch, optimizing query performance and developing custom Elasticsearch plugins. This resulted in a **37%** improvement in query response time. I also stabilized Elasticsearch by adding a distributed locking gatekeeper, adding a node level cache and partitions for better performance.
2. **Tenant Creation Optimization:** We achieved a remarkable feat of reducing tenant creation time for lyearn.com to just **1-2 seconds** down from a manual effort of about **30 minutes**, significantly improving our onboarding process. You can also experience the _speed_ [here](https://www.lyearn.com/signup).
3. **Load Testing:** I conducted extensive load tests, stress tests and SOAK tests, ensuring our system could handle high-stress scenarios.

### Architectural Transformation
As our system complexity grew, I orchestrated a strategic transition to Federated GraphQL architecture from a single GraphQL server. This move enhanced service scalability and promoted separation of concerns, allowing our team to work more efficiently on different parts of the system.

### Technology Migration
In a pivotal move, I executed a migration from NodeJS to Golang for compute-intensive tasks. This transition resulted in an impressive 80% reduction in processing time, showcasing the importance of choosing the right tool for the job.
