import{r as m,f as l,j as t}from"./iframe-CgfDwMsT.js";import{S as d}from"./SearchField-Bi7PpIWW.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CdXkjYm1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-iA0OTCu9.js";import"./utils-CLuUze_r.js";import"./useLocalizedStringFormatter-Bgfo292P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BaAURpti.js";import"./useFocusRing-aa-V_nwI.js";import"./index-BNYk_4JU.js";import"./index-Dv-85DYp.js";import"./useFormValidation-COEBX163.js";import"./useField-CvXFpz9I.js";import"./Button-C7WplXtK.js";import"./Hidden-CJELcxwQ.js";import"./useLabels-DNGz1z-B.js";import"./useButton-BH5dt01l.js";import"./search-CNqKXjab.js";import"./createLucideIcon-CwSVauo5.js";import"./ClearButton-BoUmlLcd.js";import"./Button-C6uLPlVc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BzThpmxU.js";import"./VisuallyHidden-DyZ9BPVk.js";import"./x-Bz2PUtNw.js";import"./FieldError-B7h73jse.js";import"./Text-E6YbvuHS.js";import"./Text-CaslyU5o.js";import"./RSPContexts-DvQiZ2rE.js";import"./Collection-C4M8l1yV.js";import"./index-UGE9mCaU.js";import"./DragAndDrop-CMsJpNTA.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-t9jVfqOa.js";import"./SelectionManager-Cl8CuRve.js";import"./useEvent-e-NwapiS.js";import"./useDescription-CrupViey.js";import"./inertValue--YI7_nZf.js";import"./useHighlightSelectionDescription-BZgWTEFY.js";import"./useUpdateEffect-Bvtecmme.js";import"./ListKeyboardDelegate-BJ31K7BN.js";import"./useHasTabbableChild-RpaEvwwz.js";import"./Checkbox-BSRBHSoY.js";import"./Form-BWcEeBnI.js";import"./check-DR1tMG6C.js";import"./useToggleState-CgcYul7U.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
