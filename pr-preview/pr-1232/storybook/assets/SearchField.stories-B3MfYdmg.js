import{r as m,f as l,j as t}from"./iframe-BzE31zAh.js";import{S as d}from"./SearchField-FiXEAgKR.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CSI3YX81.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DEtUikZw.js";import"./clsx-B-dksMZM.js";import"./Form-arZIN1dN.js";import"./useFocusRing-CqeBj5xm.js";import"./index-DdObABro.js";import"./index-DiZkuWFN.js";import"./Input-v2RlOuXS.js";import"./Hidden-7JIM7zeN.js";import"./Button-DG_UrG-_.js";import"./useLabel-BsvNbn_r.js";import"./useLabels-BAeRD83W.js";import"./useButton-zcjb-0dd.js";import"./FieldError-Bs0ZVONG.js";import"./Text-BM4F5w0Y.js";import"./clsx-Ciqy0D92.js";import"./Text-DWgTuz7g.js";import"./RSPContexts-BP6VbO9Z.js";import"./Group-w0fPDDmc.js";import"./useControlledState-PVT6AeJ2.js";import"./useLocalizedStringFormatter-iW6IrIfx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CWJDtFat.js";import"./useField-BBuU5S3O.js";import"./TextField.module-DdivwlC8.js";import"./search-CMEvlmM8.js";import"./createLucideIcon-Lrfi9yqC.js";import"./x-23zMaYXZ.js";import"./useLocalizedStringFormatter-BIklF50D.js";import"./Button-D6ialrwI.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C6-4w0VX.js";import"./Collection-CIijpQf2.js";import"./index-CtPUYOy2.js";import"./DragAndDrop-Ozpi9w2O.js";import"./getScrollParent-B2Y1TED_.js";import"./scrollIntoView-De1qC2jD.js";import"./SelectionIndicator-BedaVpk3.js";import"./SelectionManager-C7mBAcgV.js";import"./useEvent-BLL5UQ6m.js";import"./useDescription-Dn7H1kUN.js";import"./inertValue-BFSsLsiY.js";import"./useHighlightSelectionDescription-CofV8eub.js";import"./useUpdateEffect-Bsm0VQD6.js";import"./ListKeyboardDelegate-6zhjV-lS.js";import"./useHasTabbableChild-CDeQgP87.js";import"./Checkbox-C0Pgj78M.js";import"./check-BpnwENMz.js";import"./useToggleState-DdV0NQQ6.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
