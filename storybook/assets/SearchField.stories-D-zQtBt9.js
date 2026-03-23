import{r as m,f as l,j as t}from"./iframe-RTTcOKWo.js";import{S as d}from"./SearchField-D0iNmDhL.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DD8iod83.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D1hKCylV.js";import"./clsx-B-dksMZM.js";import"./Form-CAZPrwu9.js";import"./useFocusRing-BPdF-1cC.js";import"./index-DLoD3cgP.js";import"./index-DFgDWFo1.js";import"./Input-nUyzNltC.js";import"./Hidden-8U697ZOC.js";import"./Button-By1VqlsU.js";import"./useLabels-CVDdXQg_.js";import"./useButton-BYzzGwzi.js";import"./FieldError-CpMxr9c5.js";import"./Text-C6b-YPN0.js";import"./clsx-Ciqy0D92.js";import"./Text-DuBji0m4.js";import"./RSPContexts-CSsrJs75.js";import"./Group-CBwj47Ak.js";import"./useControlledState-BfNYqLEH.js";import"./useLocalizedStringFormatter-Dp6tEqIr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BRubpvpR.js";import"./useField-SLaCYCL4.js";import"./TextField.module-DdivwlC8.js";import"./search-CQjFXlzc.js";import"./createLucideIcon-D2PeHOHn.js";import"./x-BEn0c19g.js";import"./useLocalizedStringFormatter-Cqxl6r8R.js";import"./Button-EZmHrLhm.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dmb8KXLU.js";import"./Collection-CnbLTdv5.js";import"./index-Cdog32Ud.js";import"./DragAndDrop-1cDLJp7t.js";import"./getScrollParent-CH4E63H1.js";import"./scrollIntoView-D_w-QXDr.js";import"./SelectionIndicator-FD9ae3ZA.js";import"./SelectionManager-BNMg56MX.js";import"./useEvent-BaOlqYrM.js";import"./useDescription-0Cssm7i0.js";import"./inertValue-BMRIyRsT.js";import"./useHighlightSelectionDescription-qdgX79dq.js";import"./useUpdateEffect-urvwRqZL.js";import"./ListKeyboardDelegate-DzEePOMZ.js";import"./useHasTabbableChild-D7H7GIpa.js";import"./Checkbox-JmwrOs_Z.js";import"./check-DTkIp44P.js";import"./useToggleState-CGfcUHCA.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
