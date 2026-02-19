import{r as m,f as l,j as t}from"./iframe-C8C_T9pK.js";import{S as d}from"./SearchField-DSHaSETP.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CUzvswEl.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CVPSNT_z.js";import"./utils-665vdH3I.js";import"./useLocalizedStringFormatter-D9h1UHb6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dg0o6C-K.js";import"./useFocusRing-aErJaiMB.js";import"./index-BgFSJS_x.js";import"./index-Bnqj0GEH.js";import"./useFormValidation-DeBAaOac.js";import"./useField-D6-PoPba.js";import"./Button-DgcJy71N.js";import"./Hidden-BK2dTpyi.js";import"./number-DfkVkf0F.js";import"./useLabels-DLIgyPIl.js";import"./useButton-Bir6pOh3.js";import"./search-D88Wfted.js";import"./createLucideIcon-CyML3fXz.js";import"./ClearButton-Dz0udiAJ.js";import"./Button-BjszVOBG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFq-SMx0.js";import"./VisuallyHidden-H5Q5oE0x.js";import"./x-DusTrbha.js";import"./FieldError--KTQss0Q.js";import"./Text-oN8gJ-0T.js";import"./Text-B2x6FBCA.js";import"./RSPContexts-heE_-Jeu.js";import"./Collection-DujBSbvT.js";import"./index-nk6UQK0x.js";import"./DragAndDrop-Cl9r62oD.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-HavseNTU.js";import"./SelectionManager-Bq1JnUnl.js";import"./useEvent-CmeL3S54.js";import"./useDescription-B3b6CwtQ.js";import"./inertValue-BdQZg-jk.js";import"./useHighlightSelectionDescription-DiVGwt9t.js";import"./useUpdateEffect-DFs_57xi.js";import"./ListKeyboardDelegate-CEPsIi7y.js";import"./useHasTabbableChild-BsXtJrud.js";import"./Checkbox-B8tEMecA.js";import"./Form-BLLYgCAY.js";import"./check-BF9MyMTv.js";import"./useToggleState-B6HZB4xR.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
