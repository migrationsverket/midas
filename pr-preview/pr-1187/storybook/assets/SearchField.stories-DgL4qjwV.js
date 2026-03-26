import{r as m,f as l,j as t}from"./iframe-DRLQwCNB.js";import{S as d}from"./SearchField-8aUPIUAN.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B6OvqrXo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DwlK8lYm.js";import"./clsx-B-dksMZM.js";import"./Form-ClBOUQaz.js";import"./useFocusRing-lDwfAEVQ.js";import"./index-DH8oBJLm.js";import"./index-BHtNZ3Yk.js";import"./Input-CNrY3Htp.js";import"./Hidden-DAi6qXjx.js";import"./Button-B3A8qvAG.js";import"./useLabel-I8iavOjU.js";import"./useLabels-Bv060iu2.js";import"./useButton-BsM8VkEl.js";import"./FieldError-BkNvp2E6.js";import"./Text-DnHWSscL.js";import"./clsx-Ciqy0D92.js";import"./Text-ynU63HEc.js";import"./RSPContexts-TCreybeK.js";import"./Group-Op5syUbV.js";import"./useControlledState-dveh82K_.js";import"./useLocalizedStringFormatter-BxPern0h.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DC19tpsy.js";import"./useField-UQvoHlDM.js";import"./TextField.module-DdivwlC8.js";import"./search-BVfRKQq0.js";import"./createLucideIcon-BcFDGO1n.js";import"./x-DIunwg3h.js";import"./useLocalizedStringFormatter-DUEXk9yR.js";import"./Button-BfaOHdzG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D-pnepPQ.js";import"./Collection-BbtlcoHs.js";import"./index-Dt_XgYRE.js";import"./DragAndDrop-qooZtxbE.js";import"./getScrollParent-Dj7PaAHW.js";import"./scrollIntoView-CwirR4Mk.js";import"./SelectionIndicator-CFTkKB0D.js";import"./SelectionManager-NM3qzexE.js";import"./useEvent-BycsI7SI.js";import"./useDescription-B6f-6xTN.js";import"./inertValue-8jbo1glL.js";import"./useHighlightSelectionDescription-CdWxd3pq.js";import"./useUpdateEffect-DBh9xzNG.js";import"./ListKeyboardDelegate-B-shSdMA.js";import"./useHasTabbableChild-j3BTDJz2.js";import"./Checkbox-D41onXQ6.js";import"./check-DhIlGDfK.js";import"./useToggleState-Ber4sT9e.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
