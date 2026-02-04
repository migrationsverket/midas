import{r as m,f as l,j as t}from"./iframe-B_SSSC13.js";import{S as d}from"./SearchField-wLNSpriI.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BMY_CZKL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-7bOzaDvk.js";import"./utils-DvDYbPsX.js";import"./useLocalizedStringFormatter-8PuQ8rfy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DcRRIu_F.js";import"./useFocusRing-DD9UXZoZ.js";import"./index-h5wgbRS0.js";import"./index-CUO7TZGi.js";import"./useFormValidation-DeX5ISQ4.js";import"./useField-D5ATrzWx.js";import"./Button-BRuyYegt.js";import"./Hidden-1_dFGxWz.js";import"./useLabels-MYW5pJHL.js";import"./useButton-D3rl8s_R.js";import"./search-DyxwFbGq.js";import"./createLucideIcon-BX44XqHc.js";import"./ClearButton-B_aNVZp-.js";import"./Button-DwlyzCZV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-2Krnf2lE.js";import"./VisuallyHidden-DBwHi6uI.js";import"./x-CjWkaJ06.js";import"./FieldError-D1TT9t70.js";import"./Text-WBWevH5_.js";import"./Text-zzyNhY3P.js";import"./RSPContexts-Bo6wL8nR.js";import"./Collection-Bc4Mkmlx.js";import"./index-DdHBG9m2.js";import"./DragAndDrop-RCe6ODU0.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C1ClyJxV.js";import"./SelectionManager-DsvtZaIh.js";import"./useEvent-CNY1qaAe.js";import"./useDescription-CXeCeKMo.js";import"./inertValue-D9DsvI77.js";import"./useHighlightSelectionDescription-BYeKMXiS.js";import"./useUpdateEffect-Cr_yvhAT.js";import"./ListKeyboardDelegate-GR3jqGFe.js";import"./useHasTabbableChild-_TERZ2pq.js";import"./Checkbox-Dg7OiCJn.js";import"./Form-zRNHTqke.js";import"./check-CfoAM94Y.js";import"./useToggleState-BefAz5vn.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
