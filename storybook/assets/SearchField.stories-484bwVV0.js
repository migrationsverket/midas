import{r as m,f as l,j as t}from"./iframe-BFuflVuT.js";import{S as d}from"./SearchField-BMREzEjS.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-QjNFKuPF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CVETsxUB.js";import"./clsx-B-dksMZM.js";import"./Form-_O7owz9U.js";import"./useFocusRing-BGj7TLCb.js";import"./index-Brk4EwLy.js";import"./index-CJP4tsNo.js";import"./Input-1iFcmsQM.js";import"./Hidden-CWAGeXUM.js";import"./Button-Bvi4kTfB.js";import"./useLabel-CfkHNsqd.js";import"./useLabels-Df7U7HeX.js";import"./useButton-BUsqQPGJ.js";import"./FieldError-B21E2xEp.js";import"./Text-50232H9V.js";import"./clsx-Ciqy0D92.js";import"./Text-Cd7qZGor.js";import"./RSPContexts-BKJ_hWyQ.js";import"./Group-DxDnkT_x.js";import"./useControlledState-D_V-QnC2.js";import"./useLocalizedStringFormatter-BAc9MzAl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BOeOV3eO.js";import"./useField-CmfWuk6-.js";import"./TextField.module-DdivwlC8.js";import"./search-Dj2zVnle.js";import"./createLucideIcon-CY2uueIZ.js";import"./x-Dlq0AP5X.js";import"./useLocalizedStringFormatter-Cm1acgw7.js";import"./Button-B_e2-Iv-.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ChouFcZQ.js";import"./Collection-DwqB045i.js";import"./index-Cx84pKcq.js";import"./DragAndDrop-BDuekLmS.js";import"./getScrollParent-CJmvDIbp.js";import"./scrollIntoView-DyJWvoJg.js";import"./SelectionIndicator-C0jG9iBd.js";import"./SelectionManager-CDDOpm3X.js";import"./useEvent-qDpnqejC.js";import"./useDescription-CL478hBZ.js";import"./inertValue-CexJ2ePR.js";import"./useHighlightSelectionDescription-Dif0zICD.js";import"./useUpdateEffect-CCuHvzh2.js";import"./ListKeyboardDelegate-DG5oTXvP.js";import"./useHasTabbableChild-DNPSG-bl.js";import"./Checkbox-Bwt0JxhH.js";import"./check-B3FQB7GR.js";import"./useToggleState-CL-w4iAH.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
