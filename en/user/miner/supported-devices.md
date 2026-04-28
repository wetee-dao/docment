# Supported Devices

### CPU Support

* Intel 8th generation (Cannon Lake) Core i3, i5, i7, and i9 processors
* Intel 9th generation (Cascade Lake) Core i3, i5, i7, and i9 processors
* Intel 10th generation (Comet Lake) Core i3, i5, i7, and i9 processors
* 2nd Generation Xeon Scalable processors (Cascade Lake) and later generations generally provide - SGX capabilities.

### GPU Support

GPU support focuses on:

- **NVIDIA data center compute GPUs newer than H100**, for AI/HPC training and inference acceleration
- **96GB inference GPUs**, for larger-model inference and visual/video workloads

Verified (official pages):

- **H200** (Hopper, HBM3e): `https://www.nvidia.com/en-us/data-center/h200/`
- **GH200** (Grace Hopper Superchip): `https://www.nvidia.com/en-us/data-center/grace-hopper-superchip.md`
- **HGX B200 / B300** (Blackwell / Blackwell Ultra platform): `https://www.nvidia.com/en-us/data-center/b200/`
- **GB200** (Grace Blackwell Superchip / DGX GB200): `https://www.nvidia.com/en-us/data-center/dgx-gb200`
- **Blackwell product line** (includes GB200 NVL72, GB300 NVL72, etc.): `https://nvidia.com/en-gb/data-center/technologies/blackwell-architecture`
- **RTX PRO 6000 Blackwell Server Edition (96GB GDDR7)**: `https://www.nvidia.com/en-us/data-center/rtx-pro-6000-blackwell-server-edition/`

> Note: final compatibility depends on your driver/CUDA/container runtime and whether the platform images enable kernels/operators for the specific GPU architecture.
