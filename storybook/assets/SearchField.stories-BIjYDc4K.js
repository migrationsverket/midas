import{r as m,f as l,j as t}from"./iframe-Cwy6RqRk.js";import{S as d}from"./SearchField-CT6pWDzi.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CUDKTUBE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dig7OQRF.js";import"./clsx-B-dksMZM.js";import"./Form-S0R74D1Y.js";import"./useFocusRing-D2oXtlEb.js";import"./index-B9B4w_Jv.js";import"./index-9xU_DKCC.js";import"./Input-Dj5AMQSP.js";import"./Hidden-DypQ3tfS.js";import"./Button-iq1xipAk.js";import"./useLabel-DrD6Az6p.js";import"./useLabels-Bed1240S.js";import"./useButton-CywKmqyz.js";import"./FieldError-Dtb5uhEX.js";import"./Text-DKQA35ph.js";import"./clsx-Ciqy0D92.js";import"./Text-D4_zOmYN.js";import"./RSPContexts-CiaJ3HLw.js";import"./Group-CHuLe44F.js";import"./useControlledState-DxWn3JGW.js";import"./useLocalizedStringFormatter-DrQBb-pQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-oFn6QPRJ.js";import"./useField-Br2LzLU3.js";import"./TextField.module-DdivwlC8.js";import"./search-Brd9dGmT.js";import"./createLucideIcon-D-5pXknp.js";import"./x-BFQfEM6r.js";import"./useLocalizedStringFormatter-BIN4Z2mf.js";import"./Button-DQvr5Ms4.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-4XVU0CqX.js";import"./Collection-9mv6b24_.js";import"./index-CzhHH6Yp.js";import"./DragAndDrop-DIoaA2Z8.js";import"./getScrollParent-CkLJGlzO.js";import"./scrollIntoView-BP2BJLKr.js";import"./SelectionIndicator-JJXEUeBw.js";import"./SelectionManager-DvQEqNgq.js";import"./useEvent-BWNeDX6a.js";import"./useDescription-Bui8B5YG.js";import"./inertValue-A8_RP3c4.js";import"./useHighlightSelectionDescription-CPEL77-h.js";import"./useUpdateEffect-BYcZslVh.js";import"./ListKeyboardDelegate-Cwm7Zl_q.js";import"./useHasTabbableChild-mrUEUesn.js";import"./Checkbox-CkiaKmg4.js";import"./check-_Tj0J857.js";import"./useToggleState-BZ2LxWRA.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
