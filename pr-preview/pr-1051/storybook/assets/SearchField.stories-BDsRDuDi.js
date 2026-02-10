import{r as m,f as l,j as t}from"./iframe-DOk2o9NQ.js";import{S as d}from"./SearchField-DLHcPnvY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DTql2wWe.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D6ABUqgD.js";import"./utils-yxEoGQIn.js";import"./useLocalizedStringFormatter-DgU5yhXs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-yot0nzhU.js";import"./useFocusRing-DfiygLtK.js";import"./index-BDj9Getj.js";import"./index-Bd-kietF.js";import"./useFormValidation-D_TTn9Gw.js";import"./useField-DGKgmSeQ.js";import"./Button-WADFfC5e.js";import"./Hidden-C9UmOyee.js";import"./useLabels-CXX4Mh78.js";import"./useButton-oJknvzPj.js";import"./search-B_GJuMG5.js";import"./createLucideIcon-De700o01.js";import"./ClearButton-D32tep0N.js";import"./Button-BheV8xjG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DTXBmCaA.js";import"./VisuallyHidden-CCQSdTZL.js";import"./x-C_3F28-_.js";import"./FieldError-hXnolGoZ.js";import"./Text-DOsGQ1iy.js";import"./Text-B56BHEOe.js";import"./RSPContexts-DkRXQuPU.js";import"./Collection-3rCpBz2t.js";import"./index-BzKuUL7b.js";import"./DragAndDrop-CeKCN0x5.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BA3PwtVp.js";import"./SelectionManager--1kt69tk.js";import"./useEvent-CEdgHe1B.js";import"./useDescription-B9j_W6AF.js";import"./inertValue-DryK0yFK.js";import"./useHighlightSelectionDescription-CzXZwViR.js";import"./useUpdateEffect-B5rFR05Z.js";import"./ListKeyboardDelegate-ni2m7AdV.js";import"./useHasTabbableChild-Cf7Xtvjo.js";import"./Checkbox-D2Nfkkbm.js";import"./Form-crC5pc-x.js";import"./check-DZ3cCvXM.js";import"./useToggleState-Dywo3WPR.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
