import{r as m,f as l,j as t}from"./iframe-BsATTn7S.js";import{S as d}from"./SearchField-B8r87Alt.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-3h5dQXxP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BRGghZoO.js";import"./utils-CqHUKh2_.js";import"./useLocalizedStringFormatter-D0E7DUZe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D0T1sM21.js";import"./useFocusRing-Bv0lKuNU.js";import"./index-B8jfesk_.js";import"./index-DrKA0vjB.js";import"./useFormValidation-DbSiGsSK.js";import"./useField-faGGhaPE.js";import"./Button-B8-_2jR7.js";import"./Hidden-STEvN2Ch.js";import"./useLabels-Cy5smjs4.js";import"./useButton-BO5H5m2x.js";import"./search-TcCRK-UP.js";import"./createLucideIcon-CgjvvVBG.js";import"./ClearButton-DupugUVV.js";import"./Button-Bupwh-3M.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Dy_8RTcF.js";import"./VisuallyHidden-CD5_Pn7B.js";import"./x-CQFRpNWa.js";import"./FieldError-ZIUt4nLn.js";import"./Text-BZiG-sAM.js";import"./Text-DWxVSOOD.js";import"./RSPContexts-DlIxtbr4.js";import"./Collection-D-2V9vr-.js";import"./index--aMWt0R4.js";import"./DragAndDrop-C1he1CYm.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BYimUhfR.js";import"./SelectionManager-DS5LU99Q.js";import"./useEvent-BZDrSNpr.js";import"./useDescription-BNPvHP4K.js";import"./inertValue-WBZppUiN.js";import"./useHighlightSelectionDescription-W1N835Uy.js";import"./useUpdateEffect-gdCG28M_.js";import"./ListKeyboardDelegate-CZH46TN4.js";import"./useHasTabbableChild-BUny6OOv.js";import"./Checkbox-DU9n5iCZ.js";import"./Form-BdI37ukR.js";import"./check-DRY2f3p1.js";import"./useToggleState-BHdoq7ed.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
