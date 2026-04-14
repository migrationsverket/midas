import{r as m,f as l,j as t}from"./iframe-CJ-60Efo.js";import{S as d}from"./SearchField-6-lDwnQY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DvMweboT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CZH6ruXT.js";import"./clsx-B-dksMZM.js";import"./Form-CC7WfIHq.js";import"./useFocusRing-CupJGFR5.js";import"./index-vOXKIAHi.js";import"./index-BwPxUj6U.js";import"./Input-CP1yInaz.js";import"./Hidden-DsEAHCyp.js";import"./Button-DEbA7b2J.js";import"./useLabel-VhNYVAU_.js";import"./useLabels-BF24WIl1.js";import"./useButton-C626U6QZ.js";import"./FieldError-DwTCOkZc.js";import"./Text-Bn5fWWC4.js";import"./clsx-Ciqy0D92.js";import"./Text-duXz9LRx.js";import"./RSPContexts-DWc37NkB.js";import"./Group-wIK1IaXS.js";import"./useControlledState-xfItMrqO.js";import"./useLocalizedStringFormatter-CVaGGIuq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BLmCLSnX.js";import"./useField-avb_z8h9.js";import"./TextField.module-DdivwlC8.js";import"./search-DfzPiY0E.js";import"./createLucideIcon-n1hD9M9W.js";import"./x-CqpjZLya.js";import"./useLocalizedStringFormatter-CNLs5A0B.js";import"./Button-DePLT0p9.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DhklY17S.js";import"./Collection-BwmddpCk.js";import"./index-DIQ2MoDm.js";import"./DragAndDrop-BRKWV4X4.js";import"./getScrollParent-iQ5uL2tb.js";import"./scrollIntoView-B5Nn40hc.js";import"./SelectionIndicator-556dOdx1.js";import"./SelectionManager-CUThgWMG.js";import"./useEvent-D57KiGSv.js";import"./useDescription-QSvqFumA.js";import"./inertValue-dcqLOcjf.js";import"./useHighlightSelectionDescription-BErHfl8V.js";import"./useUpdateEffect-BRLR1g_C.js";import"./ListKeyboardDelegate-CBv4K7BP.js";import"./useHasTabbableChild-Bp5BUS7q.js";import"./Checkbox-qm68wH4Y.js";import"./check-DvTlej2b.js";import"./useToggleState-lJOlRy8F.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
