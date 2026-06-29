# task-api

Task management REST API — demo project for [aiops](https://github.com/yugasun/aiops).

## Quick start

```bash
npm install
npm test
npm start
```

## API

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/tasks | List all tasks |
| GET | /api/tasks/:id | Get task by ID |
| POST | /api/tasks | Create task |
| PATCH | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

## Try with aiops

```bash
# Install aiops skills
npx -y github:yugasun/aiops

# In your IDE chat:
# /aiops 加一个 health 接口，GET /health，返回 status: ok 和 app 版本号
```

See the [full walkthrough](https://github.com/yugasun/aiops/blob/main/docs/demos/health-check-walkthrough.md).
