---
sidebar_position: 2
---

# Self hosting

Self hosting allows you to get **your mocks closest to you and/or your organization**. It has all the **same features** as the "official" option.

### Advantages

- **Mocks are way quicker** since you are running them way closer than we are.
- **You** and **only you** have **access to your own data**, we don't collect any data from your instances.
- Allows you to **circumvent your organization firewalls**.

### Steps

#### Step 1: Install Docker

If you don't already have Docker installed, you can quickly do so:

```shell
curl https://get.docker.com | bash
```

#### Step 2: Create a deployment Folder

Set up a folder for your Mockos deployment:

```shell
mkdir mockos
cd mockos
```

#### Step 3: Download the docker-compose.yml file

Fetch the necessary docker-compose.yml file for Mockos:

```shell
curl https://raw.githubusercontent.com/undernightcore/mockos-back/master/docker-compose.yml -o docker-compose.yml
```

Mockos uses two services that need to be exposed:

- API -> Port 8091
- Frontend -> Port 8090

#### Step 4: Configure environment variables

Before running your compose file, create a .env file. Here's an example; make sure to customize the indicated properties:

```text
PORT=3333
HOST=0.0.0.0
BACK_URL=http://my-public-ip:8091
FRONT_URL=http://my-public-ip:8090
NODE_ENV=development
APP_KEY=nQn9FKVrvg0wjJGwaJTx_TCMfBkVoBw4

DRIVE_DISK=s3

DB_CONNECTION=pg
PG_HOST=db
PG_PORT=5432
PG_USER=mockos
PG_PASSWORD=randompassword123
PG_DB_NAME=mockos

DISABLE_VERIFICATION=true

SMTP_EMAIL=<email>
SMTP_HOST=localhost
SMTP_PORT=587
SMTP_USERNAME=<username>
SMTP_PASSWORD=<password>

S3_KEY=mockos
S3_SECRET=randompassword123
S3_BUCKET=mockos
S3_REGION=us-east-1
S3_ENDPOINT=http://s3:9000
```

**Required changes**:
- **BACK_URL:** Replace with your public URL for accessing your Mockos API. For example, "http://your-public-ip:8091" or "https://api.mockos.mydomain.com" if using a reverse proxy.
- **FRONT_URL:** Replace with your public URL for accessing your Mockos Frontend. For example, "http://your-public-ip:8090" or "https://mockos.mydomain.com" if using a reverse proxy.

**Optional (but recommended) changes**:
- **APP_KEY:** Change this to any 32-character text. Feel free to generate it randomly.
- **PG_PASSWORD:** Replace with a random password.
- **S3_SECRET:** Replace with a random password.

**Optional**:
- **DISABLE_VERIFICATION:** Set to false to use the SMTP environment variables to send verification emails for new users.
- Configure SMTP settings (**SMTP_EMAIL, SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD**) only if **DISABLE_VERIFICATION** is set to false.

#### Step 5: Run your Mockos stack

Launch your Mockos stack:

```shell
docker compose up -d
```

### Updating your Mockos instance

#### Step 1: Update Mockos images

Keep your Mockos images up to date:

```shell
docker compose pull
```

#### Step 2: Restart containers

Restart your containers to apply updates:

```shell
docker compose up -d --remove-orphans
```