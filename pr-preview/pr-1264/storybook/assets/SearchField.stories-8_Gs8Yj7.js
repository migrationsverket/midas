import{r as m,f as l,j as t}from"./iframe-Bd9H7Vfx.js";import{S as d}from"./SearchField-B_Xo1U3o.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cc8sou3u.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DsmRkWxC.js";import"./clsx-B-dksMZM.js";import"./Form-CZMTNuAO.js";import"./useFocusRing-CnLPB_6u.js";import"./index-BtBPjCGs.js";import"./index-CaWaKKHJ.js";import"./Input-DVkWBuv0.js";import"./Hidden-BsqjLjJT.js";import"./Button-BiRWLd5m.js";import"./useLabel-lBHMCnWn.js";import"./useLabels-D4u2oU-D.js";import"./useButton-BfgVUf0f.js";import"./FieldError-DpsZbolk.js";import"./Text-B_j7rweg.js";import"./clsx-Ciqy0D92.js";import"./Text-6cOQ6dAC.js";import"./RSPContexts-CuXYnuDl.js";import"./Group-BIjuMvxj.js";import"./useControlledState-075FDtLg.js";import"./useLocalizedStringFormatter-BsyS8WPI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BHngxQZ6.js";import"./useField-BPmKK2hO.js";import"./TextField.module-DdivwlC8.js";import"./search-BxeqUP4i.js";import"./createLucideIcon-DpMYq6qz.js";import"./x-CYsXEKRm.js";import"./useLocalizedStringFormatter-DCais5ZN.js";import"./Button-6v77JWTX.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ytL0956d.js";import"./Collection-DWNfCn8n.js";import"./index-CRFez_EJ.js";import"./DragAndDrop-BbSenSCP.js";import"./getScrollParent-Cbimak5V.js";import"./scrollIntoView-Bf_lnXkb.js";import"./SelectionIndicator-CQVWmUVk.js";import"./SelectionManager-5QY68epY.js";import"./useEvent-DN0cDM1V.js";import"./useDescription-C3g1on3s.js";import"./inertValue-B_IGiWym.js";import"./useHighlightSelectionDescription-D9ChvHb6.js";import"./useUpdateEffect-D1NTUXfA.js";import"./ListKeyboardDelegate-JM4p0mT-.js";import"./useHasTabbableChild-DSyMQHsj.js";import"./Checkbox-COY28THl.js";import"./check-B0xbYQ9P.js";import"./useToggleState-B_tsYRJc.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
