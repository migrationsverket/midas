import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{n}from"./iframe-B4zadWrU.js";import{a as r,i,n as a,r as o}from"./lib-CQYed5Dy.js";import{n as s,t as c}from"./Pagination-C34UTRLU.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s(),a(),l=t(),u=n(),d=Array.from({length:500},(e,t)=>({id:t+1,name:`Person ${t+1}`,email:`person${t+1}@example.com`,age:20+t%50})),f=[{accessorKey:`id`,header:`ID`},{accessorKey:`name`,header:`Name`},{accessorKey:`email`,header:`Email`},{accessorKey:`age`,header:`Age`}],p={title:`table-styles/Pagination`,component:c,args:{pageSizeOptions:[10,20,30,40,50],rows:500},argTypes:{rows:{type:`number`,control:{max:500,min:0}}},render:({rows:e,...t})=>{let n=(0,l.useMemo)(()=>d.slice(0,e),[e]),a=o({data:n,columns:f,getCoreRowModel:i(),getPaginationRowModel:r(),initialState:{pagination:{pageIndex:0,pageSize:10}}});return(0,u.jsx)(c,{...a,...a.getState().pagination,pageSizeOptions:t.pageSizeOptions})}},m={args:{rows:100}},h={render:e=>{let[t,n]=(0,l.useState)([]),[r,a]=(0,l.useState)({pageIndex:0,pageSize:50});(0,l.useEffect)(()=>{(async(e,t)=>{let r=await new Promise(n=>{setTimeout(()=>n(d.slice(e,t)),200)});n(r)})(r.pageIndex*r.pageSize,r.pageIndex*r.pageSize+r.pageSize)},[r]);let s=o({data:t,columns:f,getCoreRowModel:i(),manualPagination:!0,rowCount:d.length,onPaginationChange:a,state:{pagination:r}});return(0,u.jsx)(c,{...s,...s.getState().pagination,pageSizeOptions:e.pageSizeOptions})}},g=[`Primary`,`ServerSide`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 100
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [serverData, setServerData] = useState<Person[]>([]);
    const [pagination, setPagination] = useState({
      pageIndex: 0,
      pageSize: 50
    });
    useEffect(() => {
      const fetchData = async (firstItem: number, lastItem: number) => {
        const result: Person[] = await new Promise(res => {
          setTimeout(() => res(data.slice(firstItem, lastItem)), 200);
        });
        setServerData(result);
      };
      fetchData(pagination.pageIndex * pagination.pageSize, pagination.pageIndex * pagination.pageSize + pagination.pageSize);
    }, [pagination]);
    const table = useReactTable({
      data: serverData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      manualPagination: true,
      rowCount: data.length,
      onPaginationChange: setPagination,
      state: {
        pagination
      }
    });
    return <Pagination {...table} {...table.getState().pagination} pageSizeOptions={args.pageSizeOptions} />;
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as Primary,h as ServerSide,g as __namedExportsOrder,p as default};