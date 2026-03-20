import{r as m,f as l,j as t}from"./iframe-B_HV58Tx.js";import{S as d}from"./SearchField-XC-38Ka6.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BBx7hMtC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D5bq7NR9.js";import"./clsx-B-dksMZM.js";import"./Form-Buk6T5M9.js";import"./useFocusRing-CQ6srqs1.js";import"./index-BV-Xu0hA.js";import"./index-BRioma8_.js";import"./Input-BaR7SQ2W.js";import"./Hidden-CWUxqDD_.js";import"./Button-9JB-LEJf.js";import"./useLabels-BLTcitxv.js";import"./useButton-86EcIjrD.js";import"./FieldError-DqYkTsF9.js";import"./Text-BmPT9jx1.js";import"./clsx-Ciqy0D92.js";import"./Text-ErMtNt0N.js";import"./RSPContexts-BqT_UpmT.js";import"./Group-DCmqm-9q.js";import"./useControlledState-BTwDuLxs.js";import"./useLocalizedStringFormatter-BvV0axQt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CsaqehcC.js";import"./useField-DMy_SaCN.js";import"./TextField.module-DdivwlC8.js";import"./search-BXqAER5a.js";import"./createLucideIcon-BVARARz1.js";import"./x-BovYJwPt.js";import"./useLocalizedStringFormatter-CoVb38JF.js";import"./Button-Bso6HAwt.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D3wC15bS.js";import"./Collection-CJbE9gxr.js";import"./index-D2CcjZE8.js";import"./DragAndDrop-BiXRx4oo.js";import"./getScrollParent-BVi9_iGw.js";import"./scrollIntoView-DDgM4B6N.js";import"./SelectionIndicator-BTlU4ApK.js";import"./SelectionManager-CMOeEkUs.js";import"./useEvent-Pf1vK6cZ.js";import"./useDescription-CFUiKXvj.js";import"./inertValue-BGdL4euS.js";import"./useHighlightSelectionDescription-C1MFmBMF.js";import"./useUpdateEffect-B1j7tqKk.js";import"./ListKeyboardDelegate-B6M7alvJ.js";import"./useHasTabbableChild-B9gXzqSq.js";import"./Checkbox-DbUnr7tN.js";import"./check-f8dUic-3.js";import"./useToggleState-D11g73XS.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
