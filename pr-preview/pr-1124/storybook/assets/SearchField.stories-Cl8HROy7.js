import{r as m,f as l,j as t}from"./iframe-DH698doG.js";import{S as d}from"./SearchField-oITdbOcW.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-e_tycWlb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-mVgYYLB3.js";import"./clsx-B-dksMZM.js";import"./Form-CD59Qj0z.js";import"./useFocusRing-BGlk11Cg.js";import"./index-DMd-E98X.js";import"./index-DdbUDU8H.js";import"./Input-lk79nvOO.js";import"./Hidden-lMTjRszI.js";import"./Button-BtUst4AR.js";import"./useLabels-D0yThyi4.js";import"./useButton-D9Hw2-4l.js";import"./FieldError-LfuFvrGD.js";import"./Text-wTeCM58U.js";import"./clsx-Ciqy0D92.js";import"./Text-B6-Pmcz8.js";import"./RSPContexts-BEJaOB8S.js";import"./Group-CUa0FXuH.js";import"./useControlledState-BAbuv76Z.js";import"./useLocalizedStringFormatter-GBxrcPr6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Br6ZModO.js";import"./useField-m9aJz28J.js";import"./TextField.module-DdivwlC8.js";import"./search-Dl74F3CS.js";import"./createLucideIcon-CRaNdiYT.js";import"./x-Cpk9L1c7.js";import"./useLocalizedStringFormatter-BLVqg3Su.js";import"./Button-D64pEHkS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C_koxuPK.js";import"./Collection-B4bQsR1B.js";import"./index-Cbw_85Vk.js";import"./DragAndDrop-C_kdq3LH.js";import"./getScrollParent-3lUfZO39.js";import"./scrollIntoView-j5v68fUZ.js";import"./SelectionIndicator-DP_4UPJ9.js";import"./SelectionManager-tXc53_-F.js";import"./useEvent-CBcHK6bo.js";import"./useDescription-DRxPyHbI.js";import"./inertValue-CESg4anX.js";import"./useHighlightSelectionDescription--Yeb-I-Y.js";import"./useUpdateEffect-CR4gVAs_.js";import"./ListKeyboardDelegate-CNPYY1Nf.js";import"./useHasTabbableChild-gtCIy_KB.js";import"./Checkbox-BhDo0NM3.js";import"./check-IhgjoMDI.js";import"./useToggleState-CjKDsN-I.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
