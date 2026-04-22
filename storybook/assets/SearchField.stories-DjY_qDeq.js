import{r as m,f as l,j as t}from"./iframe-DQmFqJHS.js";import{S as d}from"./SearchField-_gYprXbN.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CW5CreMi.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BWrI25uH.js";import"./clsx-B-dksMZM.js";import"./Form-icO7fyR0.js";import"./useFocusRing-DItV0gqG.js";import"./index-DbK-4WGE.js";import"./index-D4usGqcY.js";import"./Input-Bazp2pYi.js";import"./Hidden-D-Me28_w.js";import"./Button-CvJGdaRR.js";import"./useLabel-Chhaff-p.js";import"./useLabels-BqXx-hbX.js";import"./useButton-DialTVJ6.js";import"./FieldError-CaxPGIch.js";import"./Text-D7G5v1zt.js";import"./clsx-Ciqy0D92.js";import"./Text-Dv2vHw0w.js";import"./RSPContexts-DADBvuUA.js";import"./Group-WhaxRWQU.js";import"./useControlledState-C5li1zvV.js";import"./useLocalizedStringFormatter-BqAD4sFO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DLSn5o2C.js";import"./useField-BpO0DqgO.js";import"./TextField.module-DdivwlC8.js";import"./search-CzBxuP16.js";import"./createLucideIcon-BG_KaWyL.js";import"./x-Dm_VUSkk.js";import"./useLocalizedStringFormatter-pqjFMR5W.js";import"./Button-Cc39pfDx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CzKNKfXb.js";import"./Collection-PnuOJgDp.js";import"./index-C3OZM2iR.js";import"./DragAndDrop-CRj3Phy2.js";import"./getScrollParent-DjSabJcp.js";import"./scrollIntoView-5ZKvz8fx.js";import"./SelectionIndicator-BQPUdFWW.js";import"./SelectionManager-4dXQCzrP.js";import"./useEvent-CTB_6RyV.js";import"./useDescription-h9Po8Y0i.js";import"./inertValue-D6mlYnCP.js";import"./useHighlightSelectionDescription-CWgBNLif.js";import"./useUpdateEffect-YOHctyg7.js";import"./ListKeyboardDelegate-BwQ5f0g5.js";import"./useHasTabbableChild-CFYoTpyc.js";import"./Checkbox-wIHWnxmd.js";import"./check-nWUL1Qv6.js";import"./useToggleState-FFKo_5I2.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
