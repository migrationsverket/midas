import{r as m,f as l,j as t}from"./iframe-Dmk7YWbP.js";import{S as d}from"./SearchField-Cng3N4Mj.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-_JzOIFwV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CZU1a0io.js";import"./clsx-B-dksMZM.js";import"./Form-lxF2zL-k.js";import"./useFocusRing-DQsZ5BW0.js";import"./index-D7ra6ojE.js";import"./index-CGyxxXDN.js";import"./Input-DJ2I6k99.js";import"./Hidden-j21WNwyS.js";import"./Button-F5fRRQra.js";import"./useLabel-DM6ovL82.js";import"./useLabels-BCoT3OdJ.js";import"./useButton-C4S2lX_8.js";import"./FieldError-Blg6FnKj.js";import"./Text-C-958akl.js";import"./clsx-Ciqy0D92.js";import"./Text--asL3Zcb.js";import"./RSPContexts-BkluUXe_.js";import"./Group-Dd_e3Mvl.js";import"./useControlledState-C7rqhk2c.js";import"./useLocalizedStringFormatter-BZ6VtZ8V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D6Ij23Fi.js";import"./useField-BTvl88ll.js";import"./TextField.module-DdivwlC8.js";import"./search-CW9QntIM.js";import"./createLucideIcon-Dl46zayF.js";import"./x-CR8vb-29.js";import"./useLocalizedStringFormatter-BIZu7Yxw.js";import"./Button-BkclXew1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CW18ePiJ.js";import"./Collection-BUZ2WvuY.js";import"./index-BEEHQsac.js";import"./DragAndDrop-eINEXbqk.js";import"./getScrollParent-CKQLrhSn.js";import"./scrollIntoView-B790B2bQ.js";import"./SelectionIndicator-B3uAMTLT.js";import"./SelectionManager-0hYn_pTl.js";import"./useEvent-DnGv8QpP.js";import"./useDescription-aAvmV4Vy.js";import"./inertValue-hQODrXsP.js";import"./useHighlightSelectionDescription-9p2XIuL1.js";import"./useUpdateEffect-BPBIoCea.js";import"./ListKeyboardDelegate-BQY05oIt.js";import"./useHasTabbableChild-n-J1_Jgh.js";import"./Checkbox-D49MWicO.js";import"./check-CmPBAhCb.js";import"./useToggleState-CjPdhL_R.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
