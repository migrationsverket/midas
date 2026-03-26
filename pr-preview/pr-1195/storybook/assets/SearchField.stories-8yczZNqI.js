import{r as m,f as l,j as t}from"./iframe-BgSB-ePP.js";import{S as d}from"./SearchField-C3ykzYch.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-XDbZBoCe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C5FyKCk8.js";import"./clsx-B-dksMZM.js";import"./Form-Svy9eoUw.js";import"./useFocusRing-CEd5VvO1.js";import"./index-ByecJ60K.js";import"./index-DoB2i7js.js";import"./Input-B8QMzC7u.js";import"./Hidden-CuqOQBO_.js";import"./Button-Lo8sEzbF.js";import"./useLabel-BzarhHDS.js";import"./useLabels-DD4u-YLs.js";import"./useButton-DS4hbBUr.js";import"./FieldError-6w5f847L.js";import"./Text-BdZEyiog.js";import"./clsx-Ciqy0D92.js";import"./Text-Bp3gM7sB.js";import"./RSPContexts-Dgg5-u6I.js";import"./Group-DDQgAvWO.js";import"./useControlledState-DJPtRTJ6.js";import"./useLocalizedStringFormatter-DhW77Uj_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CexmqUaG.js";import"./useField-C6hLFYbq.js";import"./TextField.module-DdivwlC8.js";import"./search-DudbDPLk.js";import"./createLucideIcon-B3pidq9m.js";import"./x-CEx6wB1z.js";import"./useLocalizedStringFormatter-CqnGehUR.js";import"./Button-BXdJw4HN.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bm0pqSKV.js";import"./Collection-BFk0hYY1.js";import"./index-CIw37Vap.js";import"./DragAndDrop-BHE7NG9_.js";import"./getScrollParent-DmZ0CDlB.js";import"./scrollIntoView-CjHtu3Nd.js";import"./SelectionIndicator-DsEab8pP.js";import"./SelectionManager-ClgoC-jL.js";import"./useEvent-Dxq_2Jhl.js";import"./useDescription-C2lPd98U.js";import"./inertValue-B26_WHTh.js";import"./useHighlightSelectionDescription-Be3e0mUM.js";import"./useUpdateEffect-BmrCg-RM.js";import"./ListKeyboardDelegate-DAJhFSXQ.js";import"./useHasTabbableChild-DHdW_cYv.js";import"./Checkbox-C_30dcTQ.js";import"./check-U7BqNtsc.js";import"./useToggleState-BBn1NjxW.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
