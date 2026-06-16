import{r as m,f as l,j as t}from"./iframe-DULmNwRk.js";import{S as d}from"./SearchField-DRkYqJlL.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Ck1wzA7t.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ddt4lU09.js";import"./clsx-B-dksMZM.js";import"./Form-csm8I6Hh.js";import"./useFocusRing-BEpALdF5.js";import"./index-CkqvgeHq.js";import"./index-w5klJIx9.js";import"./Input-DcM9CWhd.js";import"./Hidden-CsQy7rZM.js";import"./Button-CqBmXAr6.js";import"./useLabel-CSl0614R.js";import"./useLabels-yc-GS4fI.js";import"./useButton-DpIUfVnU.js";import"./FieldError-xC4u7UR2.js";import"./Text-BCTwMZj4.js";import"./clsx-Ciqy0D92.js";import"./Text-B3Zo93UV.js";import"./RSPContexts-WnZvTRJ2.js";import"./Group-B_hq_Kbr.js";import"./useControlledState-C9dDHRab.js";import"./useLocalizedStringFormatter-0ckZvhdt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-2ZO3_3sa.js";import"./useField-DH9B_Stt.js";import"./TextField.module-DdivwlC8.js";import"./search-uxjJNuFj.js";import"./createLucideIcon-vWWdbK2W.js";import"./x-B4k2jhKu.js";import"./useLocalizedStringFormatter-DkqmVuml.js";import"./Button-DD5PWbcS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DGjr60RX.js";import"./Collection-CFBqaUdA.js";import"./index-D9auj7kX.js";import"./DragAndDrop-CcopgyeN.js";import"./getScrollParent-03Uv99To.js";import"./scrollIntoView-nE0vKhc8.js";import"./SelectionIndicator-CdoqhPjb.js";import"./SelectionManager-DY2iZIMm.js";import"./useEvent-CCkwPNMO.js";import"./useDescription-CshJGrS7.js";import"./inertValue-_fM7o8cJ.js";import"./useHighlightSelectionDescription-BfLnDKpr.js";import"./useUpdateEffect-CaIhyNpE.js";import"./ListKeyboardDelegate-BR6ObpXU.js";import"./useHasTabbableChild-Cwcl5jh6.js";import"./Checkbox-D5tT4m9s.js";import"./check-DCgh9LS6.js";import"./useToggleState-CW5OUlj-.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
