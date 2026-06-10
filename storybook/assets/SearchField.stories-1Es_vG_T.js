import{r as m,f as l,j as t}from"./iframe-D-sLCnpD.js";import{S as d}from"./SearchField-C3H3HnFx.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DnXgNtY1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D3U7E8TR.js";import"./clsx-B-dksMZM.js";import"./Form-CErwLJsl.js";import"./useFocusRing-BddZYFRw.js";import"./index-CLCyT0Oh.js";import"./index-D5x8KNVK.js";import"./Input-rMBbivEa.js";import"./Hidden-y_sC-lpt.js";import"./Button-DnF54DF8.js";import"./useLabel-Cu8kCPJx.js";import"./useLabels-r9V9wZ09.js";import"./useButton-QMunS1hB.js";import"./FieldError-CFlBecVg.js";import"./Text-BKNBB32x.js";import"./clsx-Ciqy0D92.js";import"./Text-CHAFZQ5b.js";import"./RSPContexts-BDn2DSX_.js";import"./Group-7Y9XR-zS.js";import"./useControlledState-BjvLL9Qd.js";import"./useLocalizedStringFormatter-BcWSncvR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CuKgcO-_.js";import"./useField-ndYRkqXj.js";import"./TextField.module-DdivwlC8.js";import"./search-CPHn_RYI.js";import"./createLucideIcon-DYN3agFs.js";import"./x-2-riXgs7.js";import"./useLocalizedStringFormatter-CdR-Kcyq.js";import"./Button-DXPPcOjH.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-qGd6TSu6.js";import"./Collection-j1eO0jwF.js";import"./index-BrwdpFcY.js";import"./DragAndDrop-BiSH33Da.js";import"./getScrollParent-D1vwRPGd.js";import"./scrollIntoView-BjuirdaY.js";import"./SelectionIndicator-BZoYaVyr.js";import"./SelectionManager-D0Rio1l3.js";import"./useEvent-DaZ7xRUF.js";import"./useDescription-Bu2RrSkA.js";import"./inertValue-DttmVCi4.js";import"./useHighlightSelectionDescription-DINecWpg.js";import"./useUpdateEffect-Dwd6IJvw.js";import"./ListKeyboardDelegate-CO5NtSQa.js";import"./useHasTabbableChild-CWLwYq3f.js";import"./Checkbox-pL800cDe.js";import"./check--2CZfKFc.js";import"./useToggleState-1OS8LmXx.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
