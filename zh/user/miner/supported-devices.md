# Supported Devices

### CPU Support

* Intel 8th generation (Cannon Lake) Core i3, i5, i7, and i9 processors
* Intel 9th generation (Cascade Lake) Core i3, i5, i7, and i9 processors
* Intel 10th generation (Comet Lake) Core i3, i5, i7, and i9 processors
* 2nd Generation Xeon Scalable processors (Cascade Lake) and later generations generally provide - SGX capabilities.

### GPU Support

目前 GPU 侧重点支持：

- **NVIDIA 数据中心计算卡（H100 之后）**：用于 AI/HPC 的推理与训练加速
- **96GB 显存的推理卡**：用于大模型推理、视觉与视频类工作负载

已联网核对的代表型号（官方页面可查）：

- **H200**（Hopper，HBM3e）：`https://www.nvidia.com/en-us/data-center/h200/`
- **GH200**（Grace Hopper Superchip）：`https://www.nvidia.com/en-us/data-center/grace-hopper-superchip.md`
- **HGX B200 / B300**（Blackwell / Blackwell Ultra 平台）：`https://www.nvidia.com/en-us/data-center/b200/`
- **GB200**（Grace Blackwell Superchip / DGX GB200）：`https://www.nvidia.com/en-us/data-center/dgx-gb200`
- **Blackwell 架构产品线**（包含 GB200 NVL72、GB300 NVL72 等）：`https://nvidia.com/en-gb/data-center/technologies/blackwell-architecture`
- **RTX PRO 6000 Blackwell Server Edition（96GB GDDR7）**：`https://www.nvidia.com/en-us/data-center/rtx-pro-6000-blackwell-server-edition/`

> 说明：具体到“某一张卡是否可用”，最终仍取决于你的驱动版本、CUDA/容器运行时、以及平台侧镜像是否启用对应算子与架构支持。
