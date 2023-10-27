<template>
	<div class="w-100p border-box p-20 white-bg ">
		<div :style="{ height: `${realHeight}px` }" class="o-y-h">
			<div class="flex">
				<div class="flex-wrap " ref="expand-box">
					<div v-if="showSearch" class="m-t-8"></div>
					<div v-for="(item, index) in selectList" :key="index">
						<div class="flex align-center m-r-20 m-t-8">
							<span class="f-s-14 col-b-title-7 flex-shrink-0">{{ item.title }}：</span>
							<el-select
								v-model="item.key"
								size="small"
								class="m-l-16 flex-shrink-0 flex-1"
								:placeholder="item.placeholder"
								:disabled="item.disabled"
							>
								<el-option
									v-for="(val, key) in item.options"
									:label="val.label"
									:value="val.value"
									:key="key"
								></el-option>
							</el-select>
						</div>
					</div>
					<div v-if="showTime">
						<!-- <div class="flex align-center m-t-8">
							<span class="f-s-14 col-b-title-7 flex-shrink-0">申请时间：</span>
							<date-picker
								size="small"
								:margin-right="16"
								class="flex-1"
								@handleDatePickerChange="handleDatePickerChange"
							></date-picker>
						</div> -->
					</div>
				</div>
				<div class="flex m-t-8">
					<el-button size="small" style="height: 32px">重置</el-button>
					<el-button type="primary" size="small" style="height: 32px">查询</el-button>
					<el-button type="text" size="small" @click="handleClick" v-if="showExpand" style="height: 32px">
						<span>{{ isOpen ? '展开' : '收起' }}</span>
						<i :class="isOpen ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"></i>
					</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
// import DatePicker from '@/pc/components/base/dxTable/DatePicker';

export default {
	name: 'expandBox',
	components: {
		// DatePicker
	},
	props: {
		//是否展示搜索框
		showSearch: {
			default: true,
			type: Boolean
		},
		//是否展示下拉筛选
		showSelect: {
			default: true,
			type: Boolean
		},
		//是否展示时间筛选
		showTime: {
			default: true,
			type: Boolean
		}
	},

	data() {
		return {
			isOpen: true,
			selectList: [
				{
					title: '下拉类型',
					key: '123',
					options: [{ label: '123', value: 123 }],
					disabled: false,
					placeholder: '请选择文件类型'
				},
				{
					title: '下拉类型',
					key: '123',
					options: [{ label: '123', value: 123 }],
					disabled: false,
					placeholder: '请选择文件类型'
				},
				{
					title: '下拉类型',
					key: '123',
					options: [{ label: '123', value: 123 }],
					disabled: false,
					placeholder: '请选择文件类型'
				},
				{
					title: '下拉类型',
					key: '123',
					options: [{ label: '123', value: 123 }],
					disabled: false,
					placeholder: '请选择文件类型'
				},
				{
					title: '下拉类型',
					key: '123',
					options: [{ label: '123', value: 123 }],
					disabled: false,
					placeholder: '请选择文件类型'
				},
				{
					title: '下拉类型',
					key: '123',
					options: [{ label: '123', value: 123 }],
					disabled: false,
					placeholder: '请选择文件类型'
				},
				{
					title: '下拉类型',
					key: '123',
					options: [{ label: '123', value: 123 }],
					disabled: false,
					placeholder: '请选择文件类型'
				}
			],
			defaultHeight: 40,
			realHeight: 40,
			showExpand: false
		};
	},
	mounted() {
		this.initHeight();
	},
	methods: {
		handleDatePickerChange() {},
		initHeight() {
			this.$nextTick(() => {
				const height = this.$refs['expand-box'].clientHeight;
				this.showExpand = height > this.defaultHeight;
				if (this.isOpen) {
					this.realHeight = height > this.defaultHeight ? this.defaultHeight : height;
				} else {
					this.realHeight = height;
				}
			});
		},
		handleClick() {
			this.isOpen = !this.isOpen;
			this.initHeight();
		}
	}
};
</script>
<style  scoped>
.flex{
	display: flex;
}
.flex-wrap{
	display: flex;
	flex-wrap: wrap;
}
.align-center{
	display: flex;
	align-items: center;
}
.o-y-h{
	overflow: hidden;
}
.m-t-8{
	margin-top: 8px;
}
.w-100p{
	width: 100%;
}
.p-20{
	padding: 20px;
}
.border-box{
	box-sizing: border-box;
}
.white-bg{
	background: #fff;
}
.m-r-20{
	margin-right: 20px;
}
</style>