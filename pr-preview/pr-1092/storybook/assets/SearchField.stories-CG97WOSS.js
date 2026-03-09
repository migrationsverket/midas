import{r as m,f as l,j as t}from"./iframe-C_rSI28S.js";import{S as d}from"./SearchField-k4CJGmQ3.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CB1sM0bY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bu5qipFz.js";import"./utils-B9fitk-d.js";import"./useLocalizedStringFormatter-CS1E0pV3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BLjqu1CJ.js";import"./useFocusRing-1c7-b3IG.js";import"./index-D-oq6Wi4.js";import"./index-DhVgnvLi.js";import"./useFormValidation-JyWYvn9r.js";import"./useField-Be67gG5q.js";import"./Button-BZMldgT_.js";import"./Hidden-DkMo9DJh.js";import"./useLabels-BB_4cBjW.js";import"./useButton-BJxdkC7q.js";import"./search-nlv-2JLN.js";import"./createLucideIcon-DJNcDtcF.js";import"./ClearButton-IajY5Ne1.js";import"./Button-DfJo8lJp.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-iM29cO5J.js";import"./VisuallyHidden-DjxO6q8B.js";import"./x-Bm_2sjYb.js";import"./FieldError-B2EZQXDz.js";import"./Text-C0Ky8cuO.js";import"./Text-D8Oj8wTT.js";import"./RSPContexts-CccBVtRj.js";import"./Collection-DQPpNpIp.js";import"./index-CMNlANvy.js";import"./DragAndDrop-CYD7mtlU.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C8GAWl4j.js";import"./SelectionManager-OOYxevrX.js";import"./useEvent-Bpac53ZB.js";import"./useDescription-w-LKIPXs.js";import"./inertValue-DLPU9Vus.js";import"./useHighlightSelectionDescription-JuwlTJMI.js";import"./useUpdateEffect-CYVuXMmn.js";import"./ListKeyboardDelegate-D1l7F5b-.js";import"./useHasTabbableChild-CyGFweYi.js";import"./Checkbox-gG_L8GWH.js";import"./Form-cbeWN56Y.js";import"./check-BgyUvS3Q.js";import"./useToggleState-CEdjZTYx.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
