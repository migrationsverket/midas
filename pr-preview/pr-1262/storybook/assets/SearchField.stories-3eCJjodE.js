import{r as m,f as l,j as t}from"./iframe-CDEaDO_F.js";import{S as d}from"./SearchField-CD7-w5OO.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B_oeC-hB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-OMrxCTYB.js";import"./clsx-B-dksMZM.js";import"./Form-CMCMqyJK.js";import"./useFocusRing-D6D_N6j5.js";import"./index-HLg42q85.js";import"./index-BWuCcNre.js";import"./Input-DsPCZRUt.js";import"./Hidden-DV64-eP0.js";import"./Button-VtRoDegr.js";import"./useLabel-BWHpOmGl.js";import"./useLabels-BTwbSZKD.js";import"./useButton-mnoEnHil.js";import"./FieldError-28bsvyp8.js";import"./Text-BM9CJ7ZD.js";import"./clsx-Ciqy0D92.js";import"./Text-I0yIqnfi.js";import"./RSPContexts-ByGtY0Qq.js";import"./Group-KrKl25VN.js";import"./useControlledState-DL-5sHQJ.js";import"./useLocalizedStringFormatter-BYvnlSsE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BtLcvdq1.js";import"./useField-DLK70uIH.js";import"./TextField.module-DdivwlC8.js";import"./search-XRlrxIne.js";import"./createLucideIcon-B5m9rABL.js";import"./x-jshiSbcB.js";import"./useLocalizedStringFormatter-1JfWbRYz.js";import"./Button-BRFWodMz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D_heY0RE.js";import"./Collection-DpglE9eU.js";import"./index-oXSIQico.js";import"./DragAndDrop-P92mhDFu.js";import"./getScrollParent-DqH0lpOQ.js";import"./scrollIntoView-Bi7y7USg.js";import"./SelectionIndicator-1032K0bl.js";import"./SelectionManager-BONC5nvo.js";import"./useEvent-CWkInWDY.js";import"./useDescription-DD-0CJF1.js";import"./inertValue-DgsoyWHb.js";import"./useHighlightSelectionDescription-DIRy1bOg.js";import"./useUpdateEffect-B1msOMiu.js";import"./ListKeyboardDelegate-DjIVihIp.js";import"./useHasTabbableChild-DCYlqm56.js";import"./Checkbox-DazsdxzI.js";import"./check-D90t5UYS.js";import"./useToggleState-CoyhYIoY.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
