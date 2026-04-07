import{r as m,f as l,j as t}from"./iframe-hABApRlT.js";import{S as d}from"./SearchField-ViUO96Me.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-KehE0f-n.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BkABga95.js";import"./clsx-B-dksMZM.js";import"./Form-C8O9btlQ.js";import"./useFocusRing-BP25i5uK.js";import"./index-77qwmgqY.js";import"./index-BVfSwpPB.js";import"./Input-BJ65okwJ.js";import"./Hidden-B-K0lNZo.js";import"./Button-BzGvPTBW.js";import"./useLabel-qHqMeu2r.js";import"./useLabels-BIKxEJiN.js";import"./useButton-BuyQblWp.js";import"./FieldError-DKFm7MzG.js";import"./Text-Cb1qObZS.js";import"./clsx-Ciqy0D92.js";import"./Text-DztaIr_D.js";import"./RSPContexts-BLO7xP9m.js";import"./Group-BWi7evdX.js";import"./useControlledState-vYw9-Cid.js";import"./useLocalizedStringFormatter-Cl3bAFJS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Z25TGOZo.js";import"./useField-DSfD8PGx.js";import"./TextField.module-DdivwlC8.js";import"./search-B0rkGVUA.js";import"./createLucideIcon-jn3NctNW.js";import"./x-viUQDrjv.js";import"./useLocalizedStringFormatter-Cc9pC_do.js";import"./Button-D27stedr.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DvfbpkLp.js";import"./Collection-ClwFbHb_.js";import"./index-BTAgFzs6.js";import"./DragAndDrop-CdTgYXny.js";import"./getScrollParent-dFLOazss.js";import"./scrollIntoView-CT_O_81j.js";import"./SelectionIndicator-C0va8j7y.js";import"./SelectionManager-mYXwMkoh.js";import"./useEvent-C0BDDOqz.js";import"./useDescription-SP7YFPBn.js";import"./inertValue-C2vgpepB.js";import"./useHighlightSelectionDescription-DkV7pJxP.js";import"./useUpdateEffect-BapJATAW.js";import"./ListKeyboardDelegate-Tqfl4kl6.js";import"./useHasTabbableChild-BJXqXJER.js";import"./Checkbox-DqLRp2ZS.js";import"./check-k1jOMSBO.js";import"./useToggleState-CUj7c-BE.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
