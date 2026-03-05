import{r as m,f as l,j as t}from"./iframe-DZcdf5IT.js";import{S as d}from"./SearchField-CHrmmqtb.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CljDnUwg.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-vKZEA0Q3.js";import"./utils-CiNm3Qeg.js";import"./useLocalizedStringFormatter-BvvnikhE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BntTv2Qi.js";import"./useFocusRing-D7vWP6Oc.js";import"./index-D2C9G4F0.js";import"./index-CZ7e-jOg.js";import"./useFormValidation-nGNEbK2Q.js";import"./useField-DhXwoamE.js";import"./Button-CLvrgtgS.js";import"./Hidden-iA_GYfuG.js";import"./useLabels-CS1CNfia.js";import"./useButton-CzqG6NzO.js";import"./search-DbzQX0_D.js";import"./createLucideIcon-DZnqfe9t.js";import"./ClearButton-CGhBcBwi.js";import"./Button-BczSxBEC.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BcqTdo_g.js";import"./VisuallyHidden-BXj8zTTi.js";import"./x-kt49nsQj.js";import"./FieldError-DM82MGqL.js";import"./Text-Cr9EbC1Z.js";import"./Text-C3ytoZ0p.js";import"./RSPContexts-t528C0-R.js";import"./Collection-DOBVywAo.js";import"./index-OfYdkwnf.js";import"./DragAndDrop-pcqmaGx-.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BUKB6LFr.js";import"./SelectionManager-DP5WacrU.js";import"./useEvent-DLq_Qgr9.js";import"./useDescription-Cin-5YQg.js";import"./inertValue-BXw2Ptjp.js";import"./useHighlightSelectionDescription-T3y0j4St.js";import"./useUpdateEffect-DccEmRFv.js";import"./ListKeyboardDelegate-5OkbUwLz.js";import"./useHasTabbableChild-1BY7fxvA.js";import"./Checkbox-BxmHrbwT.js";import"./Form-C6UMk9z-.js";import"./check-D8aPjNxQ.js";import"./useToggleState-BfZW1Vel.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
