import{r as m,f as l,j as t}from"./iframe-E1AQR6fx.js";import{S as d}from"./SearchField-C7by3QFs.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DtntNJKG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DzUy243X.js";import"./utils-C9k_Z1-L.js";import"./useLocalizedStringFormatter-Cs1nU2fr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CiQLJwP_.js";import"./useFocusRing-ClTdqGvY.js";import"./index-BY2IQZHk.js";import"./index-LL_riRvH.js";import"./useFormValidation-rmf8_tul.js";import"./useField-DWsbBHmV.js";import"./Button-Dcl0k1ed.js";import"./Hidden-9DB17Ws8.js";import"./number-DfkVkf0F.js";import"./useLabels-BBvY9IMA.js";import"./useButton-CI0sJCD2.js";import"./search-1eQhC6ht.js";import"./createLucideIcon-D8ApGr_r.js";import"./ClearButton-DndjT6LD.js";import"./Button-IKHtJ1-M.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dtq-c4fz.js";import"./VisuallyHidden-Bpe1pimA.js";import"./x-CmXiTMgS.js";import"./FieldError-EwGM1OTM.js";import"./Text-Dbmjj9FJ.js";import"./Text-CEr6kfZB.js";import"./RSPContexts-JAi78m_a.js";import"./Collection-CReVKHXj.js";import"./index-ZiZl57TD.js";import"./DragAndDrop-BP-6NZ5_.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CDXq8XPz.js";import"./SelectionManager-JLfCQcPz.js";import"./useEvent-DhJ_snWh.js";import"./useDescription-BmqQ3yEq.js";import"./inertValue-C6jDOwlf.js";import"./useHighlightSelectionDescription-kbsa8ZdT.js";import"./useUpdateEffect-Ds_EomMe.js";import"./ListKeyboardDelegate-ecpZjwil.js";import"./useHasTabbableChild-D4BGiBHR.js";import"./Checkbox-C8beGuY1.js";import"./Form-B-5JEGEy.js";import"./check-Dwqb8mZu.js";import"./useToggleState-iQMUvdmz.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
