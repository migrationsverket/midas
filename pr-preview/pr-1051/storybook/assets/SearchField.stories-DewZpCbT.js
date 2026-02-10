import{r as m,f as l,j as t}from"./iframe-B5c7-TS8.js";import{S as d}from"./SearchField-B0XUc6FY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-nhmuhsm4.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DEZrae_z.js";import"./utils-OlD28Oco.js";import"./useLocalizedStringFormatter-Bu05u6GJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CYI-qgQw.js";import"./useFocusRing-C18dDj3L.js";import"./index-ByEKdHjQ.js";import"./index-41iNjvFE.js";import"./useFormValidation-fe3exVFC.js";import"./useField-BXzSvw9G.js";import"./Button-C5Qp8sRI.js";import"./Hidden-DgJfQ7aj.js";import"./useLabels-BKo_NQ3G.js";import"./useButton-Br7F04Rc.js";import"./search-mmaAdosV.js";import"./createLucideIcon-DHsWZlEk.js";import"./ClearButton-B-gfvu2J.js";import"./Button-MSp50WJ0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dhn_O0nj.js";import"./VisuallyHidden-ByTPJ2eV.js";import"./x-LkEAYfSs.js";import"./FieldError-BUOTNQMM.js";import"./Text-DYD59UTl.js";import"./Text-CXLpjGso.js";import"./RSPContexts-yBqgqokE.js";import"./Collection-BNPzsOfb.js";import"./index-CoLrQld2.js";import"./DragAndDrop-CgS4hfmc.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CA3Uq9OB.js";import"./SelectionManager-Bwh8qqDD.js";import"./useEvent-LUYrey9d.js";import"./useDescription-BhjMw0Jb.js";import"./inertValue-I3xaj-I2.js";import"./useHighlightSelectionDescription-B8yVgjH1.js";import"./useUpdateEffect-DBJWHIG4.js";import"./ListKeyboardDelegate-GShWNoVd.js";import"./useHasTabbableChild-DLC17nPu.js";import"./Checkbox-C37WXJ92.js";import"./Form-Cv6_3fLN.js";import"./check-DF6IRbNH.js";import"./useToggleState-j3KQvAYo.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
