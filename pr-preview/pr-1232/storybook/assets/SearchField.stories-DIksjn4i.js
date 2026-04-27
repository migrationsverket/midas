import{r as m,f as l,j as t}from"./iframe-C1MoIoFQ.js";import{S as d}from"./SearchField-D1h28i6t.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-iJKvdK-c.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dd9KjGc9.js";import"./clsx-B-dksMZM.js";import"./Form-BgY7Eb4J.js";import"./useFocusRing-BDQMY-6N.js";import"./index-C81WqCTC.js";import"./index-CwePtk0Z.js";import"./Input-ChqxD6Ro.js";import"./Hidden-CQA8_prX.js";import"./Button-Bt2VcdxR.js";import"./useLabel-BXOmRBqN.js";import"./useLabels-ONT18L0d.js";import"./useButton-kMH8ZZTp.js";import"./FieldError-xLLnQN0i.js";import"./Text-BxVOdM76.js";import"./clsx-Ciqy0D92.js";import"./Text-BZ5m3zwb.js";import"./RSPContexts-rTZVWH0H.js";import"./Group-jP0NGuCQ.js";import"./useControlledState-BDHCwT0f.js";import"./useLocalizedStringFormatter-DtXEU9jw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DQqQ2u1P.js";import"./useField-rPcU4U3B.js";import"./TextField.module-DdivwlC8.js";import"./search-DKSrZERL.js";import"./createLucideIcon-CpvMiuWS.js";import"./x-CreL89JY.js";import"./useLocalizedStringFormatter-DN-WkxQL.js";import"./Button-Bh1vA6XB.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CrG6ZMtm.js";import"./Collection-C2HKqn-L.js";import"./index-rZNXYI3D.js";import"./DragAndDrop-B_Vzz6ct.js";import"./getScrollParent-MGDKI0Li.js";import"./scrollIntoView-CV3jjMt7.js";import"./SelectionIndicator-TFXYChPQ.js";import"./SelectionManager-GFTd_q9E.js";import"./useEvent-9VQOaFMz.js";import"./useDescription-CWsbdymE.js";import"./inertValue-B9xas1c8.js";import"./useHighlightSelectionDescription-hXfx3Q0N.js";import"./useUpdateEffect-BYXZa2He.js";import"./ListKeyboardDelegate-CqDetXlF.js";import"./useHasTabbableChild-Bq0eAnHf.js";import"./Checkbox-CeMQjmSF.js";import"./check-BkQ5UsrH.js";import"./useToggleState-CdWq4lxQ.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
