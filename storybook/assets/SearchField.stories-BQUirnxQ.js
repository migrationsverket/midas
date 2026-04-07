import{r as m,f as l,j as t}from"./iframe-oKPevWaY.js";import{S as d}from"./SearchField-BPe1v0Tl.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BAp-Xh1i.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BqjuQA51.js";import"./clsx-B-dksMZM.js";import"./Form-D8hKIz8A.js";import"./useFocusRing-BNAmj3ga.js";import"./index-C5PKnBSq.js";import"./index-DgJJn68D.js";import"./Input-CjDHzIIp.js";import"./Hidden-DpO7vPy1.js";import"./Button-UMnKvlHB.js";import"./useLabel-DD_tHSVp.js";import"./useLabels-Dudi4a5M.js";import"./useButton-BQzjyOJs.js";import"./FieldError-B9nT_kkA.js";import"./Text-NuhHAO3F.js";import"./clsx-Ciqy0D92.js";import"./Text-CEmixCfV.js";import"./RSPContexts-I8GuPoNW.js";import"./Group-D4AR734E.js";import"./useControlledState-CyVhgPro.js";import"./useLocalizedStringFormatter-Ds6Qg8Ar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B-1OQ-Tr.js";import"./useField-Bl_GZwWa.js";import"./TextField.module-DdivwlC8.js";import"./search-a7Ruo4We.js";import"./createLucideIcon-D_CPhcXk.js";import"./x-DIFCquM7.js";import"./useLocalizedStringFormatter-C0pOBFKJ.js";import"./Button-BPGT5-63.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D5YwBUcA.js";import"./Collection-CkdTzR9R.js";import"./index-CzQfmgnt.js";import"./DragAndDrop-BcWxLU6R.js";import"./getScrollParent-B4qiDCOv.js";import"./scrollIntoView-B_u9uatn.js";import"./SelectionIndicator-lk-xC_bn.js";import"./SelectionManager-CDyUNFjs.js";import"./useEvent-IXAyeg2x.js";import"./useDescription-Ya8G2xdV.js";import"./inertValue-Bz4jWhKx.js";import"./useHighlightSelectionDescription-CeUQ4UO5.js";import"./useUpdateEffect-D2uSapZk.js";import"./ListKeyboardDelegate-i-dcu7Zi.js";import"./useHasTabbableChild-BiW3X7yY.js";import"./Checkbox-D4TYbEoW.js";import"./check-BZoVZ7-0.js";import"./useToggleState-DcrfUPyt.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
