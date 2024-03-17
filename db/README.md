<div style="margin: 40px 0;">
<a href="https://crowdpilot.app">
  <p align="center">
   <img style="width: 300px; object-fit: cover;" src="https://ik.imagekit.io/drs/crowdpilot/assets/Logo%20Accent%20SVG%20CrowdPilot_9EaH70mmS.svg?updatedAt=1710340228811" />
  </p>
</a>
</div>

# Database

We are using "golang-migrate" to run our database migrations and other database scripts, where this tool reads migrations from "sources" and applies them in correct order to our staging and production databases.

Our fully-managed MySQL database is deployed on Amazon Web Services through RDS. However, we also do have a backup at CleverCloud for when things go wrong.

### Docker usage

```bash
$ docker run -v {{ migration dir }}:/migrations --network host migrate/migrate
    -path=/migrations/ -database postgres://localhost:5432/database up 2
```
