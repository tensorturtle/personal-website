---
title: "Prune your Docker"
description: "Slightly dumb edge cases in self-hosting sysadmin roleplay."
date: "May 12 2025"
draft: false
---

# Prune your Docker

**A friendly reminder to run `docker system prune` regularly on production servers.**

I was updating a Docker image when I got a 'No space left on device' error.

My `/var/lib/docker` was taking 95GB(!) of storage. So I checked docker it was indeed the problem:

```bash
$ docker system df
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          48        17        76.17GB   71.32GB (93%)
Containers      23        21        164.1MB   0B (0%)
Local Volumes   11        10        3.478GB   0B (0%)
Build Cache     8         0         0B        0B
```

Docker image bloat happens because when I update containers, I use `docker compose pull` followed by `docker compose up -d`.
This keeps both the old and new images on disk.

Solution: run `docker system prune` after upgrade operations, but since we don't rely on good habits on production servers, add a Cron job to do this regularly.

```bash
crontab -e
```

Add this line to run pruning at midnight daily.
```
0 0 * * * /usr/bin/docker system prune -af
```
