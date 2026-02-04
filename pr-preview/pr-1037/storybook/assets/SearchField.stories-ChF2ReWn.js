import{r as m,f as l,j as t}from"./iframe-AzeRMI6E.js";import{S as d}from"./SearchField-Cy59Rxn1.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dpikvby0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-KwKgHDy1.js";import"./utils-C6Ogk0cQ.js";import"./useLocalizedStringFormatter-C14yyg5V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BxMcuNOz.js";import"./useFocusRing-IRQc2pc2.js";import"./index-6ebY7xVy.js";import"./index-BUDprfFK.js";import"./useFormValidation-Fw-45rMv.js";import"./useField-BOUewxY-.js";import"./Button-BM_9r6cn.js";import"./Hidden-DlywG7Qa.js";import"./useLabels-CKRjxM8h.js";import"./useButton-F4pMDae2.js";import"./search-DvAxqIOh.js";import"./createLucideIcon-Cbaqp_e4.js";import"./ClearButton-Syyws9NN.js";import"./Button-Dymh8tI2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D3Cc5nzM.js";import"./VisuallyHidden-Cdl-x6Ak.js";import"./x-CXoFC9Eh.js";import"./FieldError-Bhumxp-K.js";import"./Text-DifqYix-.js";import"./Text-CgQK_TBj.js";import"./RSPContexts-zi7bfW4c.js";import"./Collection-CDhyUV2N.js";import"./index-d-6dDUYh.js";import"./DragAndDrop-C7FlXx1A.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B0GlzpJ_.js";import"./SelectionManager-uTGJdGpQ.js";import"./useEvent-hvkR2q06.js";import"./useDescription-DaNElkfk.js";import"./inertValue-DFB6_a91.js";import"./useHighlightSelectionDescription-BMLYq7jB.js";import"./useUpdateEffect-Cud6yC-G.js";import"./ListKeyboardDelegate--oU5vUq4.js";import"./useHasTabbableChild-RhP65RWQ.js";import"./Checkbox-CLsWoWFm.js";import"./Form-Cpd_U7HJ.js";import"./check-BRDl3HLR.js";import"./useToggleState-CFze852B.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
