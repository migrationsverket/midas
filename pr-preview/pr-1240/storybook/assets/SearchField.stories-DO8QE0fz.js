import{r as m,f as l,j as t}from"./iframe-DpTmCcsu.js";import{S as d}from"./SearchField-ZfPBoWD4.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BkckYiyC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BkAa9oCc.js";import"./clsx-B-dksMZM.js";import"./Form-ZmL5cGy_.js";import"./useFocusRing-p-K2lh1y.js";import"./index-DCsIhNab.js";import"./index-n8gR98_1.js";import"./Input-Dmb9VKDV.js";import"./Hidden-pLTvcnD_.js";import"./Button-BsQKBFvZ.js";import"./useLabel-Bn7w8Ubf.js";import"./useLabels-DI-VIC2d.js";import"./useButton-yUVIJFB0.js";import"./FieldError-DZQ02WXe.js";import"./Text-C2ABOPKT.js";import"./clsx-Ciqy0D92.js";import"./Text-DZjjFYeH.js";import"./RSPContexts-CDes9nfa.js";import"./Group-CjaNmGuh.js";import"./useControlledState-Du11SrDH.js";import"./useLocalizedStringFormatter-B3B7XcvV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-y31WfOTf.js";import"./useField-BZUShFHQ.js";import"./TextField.module-DdivwlC8.js";import"./search-C2L64Ler.js";import"./createLucideIcon-BVEhdOTx.js";import"./x-Ch6sGbPf.js";import"./useLocalizedStringFormatter-DzRBAxmk.js";import"./Button-BML3brTK.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dp3u6Svq.js";import"./Collection-pS06VS6s.js";import"./index-BChFUTeo.js";import"./DragAndDrop-BXDx-znm.js";import"./getScrollParent-BTKk9p6-.js";import"./scrollIntoView-D1143tc0.js";import"./SelectionIndicator-CoqMXBj6.js";import"./SelectionManager-EeeeUcvE.js";import"./useEvent-aGapLNe8.js";import"./useDescription-ZwNvLjiW.js";import"./inertValue-DV_eSDv9.js";import"./useHighlightSelectionDescription-BmsXseLE.js";import"./useUpdateEffect-DoqCHROH.js";import"./ListKeyboardDelegate-BqFXxQy7.js";import"./useHasTabbableChild-CEeaKsE3.js";import"./Checkbox-pcFJFnEY.js";import"./check-XFxp686h.js";import"./useToggleState-8zRGcaxf.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
