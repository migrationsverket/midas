import{r as m,f as l,j as t}from"./iframe-CUSvXe23.js";import{S as d}from"./SearchField-MKMjUc7O.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BieTCtKl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CkRXDuX-.js";import"./clsx-B-dksMZM.js";import"./Form-CKmcwWsP.js";import"./useFocusRing-BuJn1tRD.js";import"./index-BjoHnV1_.js";import"./index-CdztG2Xx.js";import"./Input-Bh5XjTjP.js";import"./Hidden-Dhsax2Cn.js";import"./Button-C1-Re332.js";import"./useLabel-ulwKDPvJ.js";import"./useLabels-BPCgaUFa.js";import"./useButton-BO5Zhbxe.js";import"./FieldError-t8sTtSNx.js";import"./Text-DLWDclOW.js";import"./clsx-Ciqy0D92.js";import"./Text-NxTN73uc.js";import"./RSPContexts-BfFZIYKm.js";import"./Group-CLc-S5J5.js";import"./useControlledState-BDwJH1MB.js";import"./useLocalizedStringFormatter-CQWvwsyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BO4SPiFd.js";import"./useField-Bd0xb1Jz.js";import"./TextField.module-DdivwlC8.js";import"./search-BlkAEBgT.js";import"./createLucideIcon-Ce9oZthD.js";import"./x-W7_jPxcF.js";import"./useLocalizedStringFormatter-DOZj6KI_.js";import"./Button-ricz7KuE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-YrO2RMP0.js";import"./Collection-DVKXIiRM.js";import"./index-BpgVI4Ey.js";import"./DragAndDrop-D3Byo9eJ.js";import"./getScrollParent-DO1MdHqq.js";import"./scrollIntoView-CjSFcs3B.js";import"./SelectionIndicator-BsHKQOI6.js";import"./SelectionManager-DsrNbEuz.js";import"./useEvent-DjixHLjK.js";import"./useDescription-CSzbO1wx.js";import"./inertValue-mOPl8NXi.js";import"./useHighlightSelectionDescription-k1hzuoIB.js";import"./useUpdateEffect-DpVMtmWZ.js";import"./ListKeyboardDelegate--p1TIPpF.js";import"./useHasTabbableChild-CcC45vz7.js";import"./Checkbox-CTbW8ApC.js";import"./check-CGrmEn2X.js";import"./useToggleState-BmGzd-Ie.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
