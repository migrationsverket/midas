import{r as m,f as l,j as t}from"./iframe-B6v7SNgB.js";import{S as d}from"./SearchField-CrV17dGy.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CPQgy8o2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DvQnzAUx.js";import"./clsx-B-dksMZM.js";import"./Form-CFc7lGpW.js";import"./useFocusRing-BmrkPpfG.js";import"./index-CKeRqnm_.js";import"./index-D5Cv7XFv.js";import"./Input-B-WrNOQP.js";import"./Hidden-DVRxRWYq.js";import"./Button-R8L0fisR.js";import"./useLabel-CZ56tTPg.js";import"./useLabels-BrspC8rV.js";import"./useButton-k8VWywdi.js";import"./FieldError-lkabuhB0.js";import"./Text-BIYy6_GG.js";import"./clsx-Ciqy0D92.js";import"./Text-IRrkNmmn.js";import"./RSPContexts-xsTqzyol.js";import"./Group-B_1NLwKO.js";import"./useControlledState-BWAzPrBc.js";import"./useLocalizedStringFormatter-DoD5PX0W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DZ5kzp9G.js";import"./useField-CQP4R4b6.js";import"./TextField.module-DdivwlC8.js";import"./search-CrFUeLQB.js";import"./createLucideIcon-DJSw6RDm.js";import"./x-DEpZC0gz.js";import"./useLocalizedStringFormatter-d_TsE8p1.js";import"./Button-DFw2NzPi.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-s-TUYsoQ.js";import"./Collection-BlrbCw0M.js";import"./index-BNtVYo6Q.js";import"./DragAndDrop-BX3ozJiw.js";import"./getScrollParent-TDrNm2Qd.js";import"./scrollIntoView-4Kj4GFr4.js";import"./SelectionIndicator-CSYpu25s.js";import"./SelectionManager-BEdA5cgA.js";import"./useEvent-DDlHCXaB.js";import"./useDescription-CGrNZaxo.js";import"./inertValue-Ctwt8ail.js";import"./useHighlightSelectionDescription-B7T0zsYG.js";import"./useUpdateEffect-BerLl7Lc.js";import"./ListKeyboardDelegate-CP7RNJLy.js";import"./useHasTabbableChild-C_w4bK2r.js";import"./Checkbox-DwbE26-_.js";import"./check-BkCrmXb3.js";import"./useToggleState-B65vyX8v.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
