import{r as m,f as l,j as t}from"./iframe-pduEcsSH.js";import{S as d}from"./SearchField-XQaY7o_g.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D6gwbx0Y.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BOnL6wJ7.js";import"./utils-BDr4Ozea.js";import"./useLocalizedStringFormatter-DvjpYU0E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B5nqPH39.js";import"./useFocusRing-DIwubJgO.js";import"./index-CLoMZda8.js";import"./index-BcjOI7az.js";import"./useFormValidation-DEYOuSXO.js";import"./useField-C535uo8a.js";import"./Button-C9Zkv-mX.js";import"./Hidden-CcVqblB0.js";import"./useLabels-vBTL4yFU.js";import"./useButton-CrWzEdIJ.js";import"./search-DLHGNm-g.js";import"./createLucideIcon-CqNy4haF.js";import"./ClearButton-Bd1aZDbT.js";import"./Button-ZdIQo3Zg.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CWZjMemu.js";import"./VisuallyHidden-g_-Wgf1Q.js";import"./x-BXHSIKq2.js";import"./FieldError-NJ_dGOmM.js";import"./Text-rxoULlv-.js";import"./Text-CSwEFBIi.js";import"./RSPContexts-sVFmam6L.js";import"./Collection-kYIQkrfn.js";import"./index-BhxNLflr.js";import"./DragAndDrop-BvySb82u.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DSmbPReq.js";import"./SelectionManager-mJ_b45K5.js";import"./useEvent-DIbok-p1.js";import"./useDescription-DMdZFyiC.js";import"./inertValue-CPD5cdZ_.js";import"./useHighlightSelectionDescription-BnEplr9D.js";import"./useUpdateEffect-CReUJiVL.js";import"./ListKeyboardDelegate-Bhxs3C87.js";import"./useHasTabbableChild-CtrBoPqg.js";import"./Checkbox-4RsUh7Rv.js";import"./Form-CsCBj_Pu.js";import"./check-DA-ISeKA.js";import"./useToggleState-BPpZTMCO.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
