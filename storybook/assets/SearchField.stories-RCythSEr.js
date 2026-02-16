import{r as m,f as l,j as t}from"./iframe-Baz7hp-H.js";import{S as d}from"./SearchField-BgwD-aML.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CORkNCUM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CDtJkyNP.js";import"./utils-CjtbLxkM.js";import"./useLocalizedStringFormatter-DqxbRUdN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BZxttkmI.js";import"./useFocusRing-CA4lGYE7.js";import"./index-DJvdvGZ9.js";import"./index-EDewD6TU.js";import"./useFormValidation-BCcQtvtJ.js";import"./useField-DLevtW16.js";import"./Button-Dapo8NrY.js";import"./Hidden-oFIYqFcy.js";import"./useLabels-Cukz6TQK.js";import"./useButton-TjLWHBNo.js";import"./search-DUJbQxlR.js";import"./createLucideIcon-GOimKmMN.js";import"./ClearButton-SiH99zjs.js";import"./Button-DqFJrKR_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-wC_xJP29.js";import"./VisuallyHidden-B91vWDbG.js";import"./x-D_880TpH.js";import"./FieldError-quMvKVD1.js";import"./Text-BOruLmzb.js";import"./Text-Cyj2bmOo.js";import"./RSPContexts-DBTSYT66.js";import"./Collection-BQoRm15f.js";import"./index-BbUpshm2.js";import"./DragAndDrop-Ci6iDqMu.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DjsXp9cW.js";import"./SelectionManager-WON6PkRD.js";import"./useEvent-Bfmg4g4k.js";import"./useDescription-Cz-ry1Nm.js";import"./inertValue-DmW6ocIz.js";import"./useHighlightSelectionDescription-BMfOComk.js";import"./useUpdateEffect-DJ--z6bp.js";import"./ListKeyboardDelegate-DxWxxBDl.js";import"./useHasTabbableChild-Ct4Kp9KA.js";import"./Checkbox-BWM687j7.js";import"./Form-CILyxEJu.js";import"./check-CF1Ndu5U.js";import"./useToggleState-Cc47i16o.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
