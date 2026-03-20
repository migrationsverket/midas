import{r as m,f as l,j as t}from"./iframe-C5o5Abe9.js";import{S as d}from"./SearchField-CW1now_E.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-X0qLKC-N.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CI0V6-bZ.js";import"./clsx-B-dksMZM.js";import"./Form-zY5OwCBG.js";import"./useFocusRing-DUJ025qE.js";import"./index-O7wF_jHq.js";import"./index-gJJpgxtN.js";import"./Input-BxeWODad.js";import"./Hidden-CBrM32Fq.js";import"./Button-D0wm-Bzx.js";import"./useLabels-Bc_QKjnL.js";import"./useButton-DaL-nw23.js";import"./FieldError-Bi-8FqnY.js";import"./Text-CZIcrdc8.js";import"./clsx-Ciqy0D92.js";import"./Text-C8hlp_Vi.js";import"./RSPContexts-gnW2D4kn.js";import"./Group-BtL86FhI.js";import"./useControlledState-Bsc6Xcu0.js";import"./useLocalizedStringFormatter-D-x6F0Q7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DE370Alt.js";import"./useField-4QdNIdvN.js";import"./TextField.module-DdivwlC8.js";import"./search-Ntn9zUTC.js";import"./createLucideIcon-Dogmr7E8.js";import"./x-Bvhbyjtu.js";import"./useLocalizedStringFormatter-DRt_xGrO.js";import"./Button-B2ihGD6k.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B90J4eav.js";import"./Collection-Dp7l1slV.js";import"./index-u73MDQBH.js";import"./DragAndDrop-CCTqFerR.js";import"./getScrollParent-B7dvtfm5.js";import"./scrollIntoView-C2llSjE_.js";import"./SelectionIndicator-8ejiV-0X.js";import"./SelectionManager-B1m9ehvS.js";import"./useEvent-B6I2mMYo.js";import"./useDescription-BdlhheNd.js";import"./inertValue-Dhd4SIyZ.js";import"./useHighlightSelectionDescription-Be7I2duy.js";import"./useUpdateEffect-CrITspll.js";import"./ListKeyboardDelegate-BsvTZLMl.js";import"./useHasTabbableChild-Dwg-tcyw.js";import"./Checkbox-BEagGyyl.js";import"./check-BYgPsHSR.js";import"./useToggleState-CA8VS_L1.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
