import{r as m,f as l,j as t}from"./iframe-DVDWeSF5.js";import{S as d}from"./SearchField-C8lkzkXP.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BZLTvRpe.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Ctil2qVb.js";import"./utils-CefdWjxN.js";import"./useLocalizedStringFormatter-oiapZ5Do.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C19xw80f.js";import"./useFocusRing-C2ebvpGA.js";import"./index-H87RFqBd.js";import"./index-C4utJ2sZ.js";import"./useFormValidation-BlAwaj5F.js";import"./useField-6lRi45ZF.js";import"./Button-DfCh0cjZ.js";import"./Hidden-DjqEg1Uq.js";import"./number-DfkVkf0F.js";import"./useLabels-DToHZ87d.js";import"./useButton-BrZD_KUO.js";import"./search-CdXwVmPw.js";import"./createLucideIcon-R2m_jWpB.js";import"./ClearButton-n-1DZpu6.js";import"./Button-BQ5lVkgn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B9HTUBS2.js";import"./VisuallyHidden-CKmYPJ5r.js";import"./x-Bggqb9qW.js";import"./FieldError-DwVX8OAB.js";import"./Text-DZ1HT8EB.js";import"./Text-CLyXbdox.js";import"./RSPContexts-EgTevDbm.js";import"./Collection-Dg1khsjQ.js";import"./index-Bs-xShkJ.js";import"./DragAndDrop-DU93WcCO.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BWTvH4Dq.js";import"./SelectionManager-BYPWGnfp.js";import"./useEvent-DP-o3QeH.js";import"./useDescription-Cw3ghCqy.js";import"./inertValue-BLTQs7pS.js";import"./useHighlightSelectionDescription-DddmT7dv.js";import"./useUpdateEffect-CYq6i1lZ.js";import"./ListKeyboardDelegate-JXsOXDC-.js";import"./useHasTabbableChild-DlirSrcP.js";import"./Checkbox-BsgzFfRZ.js";import"./Form-BaVkIb1h.js";import"./check-CufaEVnA.js";import"./useToggleState-nUe3WN-f.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
