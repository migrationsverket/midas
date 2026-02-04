import{r as m,f as l,j as t}from"./iframe-CRW892uF.js";import{S as d}from"./SearchField-9eum4qWw.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ALdCp04Y.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C1CLjRGB.js";import"./utils-Cy5rPxYn.js";import"./useLocalizedStringFormatter-yyiVnhi3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BQlcLRsS.js";import"./useFocusRing-DYPhP7ff.js";import"./index-CuPhnfQx.js";import"./index-C-PwSL9X.js";import"./useFormValidation-CkXNtAlg.js";import"./useField-Dsdw6Dxh.js";import"./Button-73ueEsI0.js";import"./Hidden-DVd7J3jb.js";import"./useLabels-ChrJAk9N.js";import"./useButton-DDquVdTc.js";import"./search-C4fD8ngJ.js";import"./createLucideIcon-B-cKx2d-.js";import"./ClearButton-csMzHmcc.js";import"./Button-zEqn1U6h.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-zR_q9Jv_.js";import"./VisuallyHidden-DX9a97Gh.js";import"./x-3lOLVs8k.js";import"./FieldError-BQcQWUaq.js";import"./Text-BMcxzv8r.js";import"./Text-Bllz5--I.js";import"./RSPContexts-CZWpHYRK.js";import"./Collection-CpPeNV26.js";import"./index-Ci8Rgwt0.js";import"./DragAndDrop-zxakHsFt.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CSS8pmUq.js";import"./SelectionManager-BXP3sBpC.js";import"./useEvent-QBqF7ml7.js";import"./useDescription-CMI78JnW.js";import"./inertValue-QNgVAcZQ.js";import"./useHighlightSelectionDescription-BuJWsFC4.js";import"./useUpdateEffect-B9cs1kzZ.js";import"./ListKeyboardDelegate-CcvovjzQ.js";import"./useHasTabbableChild-C99wTjbp.js";import"./Checkbox-CdOtnuPF.js";import"./Form-sLRR6eNh.js";import"./check-kEkOiMfE.js";import"./useToggleState-D1hdVkrs.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
