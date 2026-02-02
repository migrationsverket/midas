import{r as m,f as l,j as t}from"./iframe-DuE5icfx.js";import{S as d}from"./SearchField-USory7Od.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-NOl6gBxd.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C06eYFfj.js";import"./utils-ClhP-E5R.js";import"./useLocalizedStringFormatter-mdX2hkSr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CwOwuKg2.js";import"./useFocusRing-C6UsRVMD.js";import"./index-BKNEv364.js";import"./index-jcTA0EzM.js";import"./useFormValidation-Bbe7QGfP.js";import"./useField-DnEzaulG.js";import"./Button-CHVND5il.js";import"./Hidden-CGryAwqK.js";import"./useLabels-NFESUEmH.js";import"./useButton-Dpm-9eMP.js";import"./search-gI5m81qy.js";import"./createLucideIcon-Cky2pY6t.js";import"./ClearButton-qvhhVKAP.js";import"./Button-Bv12ZKrk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DdcJq8tj.js";import"./VisuallyHidden-WoYUvN7P.js";import"./x-BFEUyRfl.js";import"./FieldError-BFyaRGX_.js";import"./Text-BXig9__r.js";import"./Text-CskgBW_y.js";import"./RSPContexts-C1VlAvM7.js";import"./Collection-Beb5fNjH.js";import"./index-B4wfGW7k.js";import"./DragAndDrop-sst3UnL_.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D6xEBqZE.js";import"./SelectionManager-DMIwF5l7.js";import"./useEvent-BRXH6lvV.js";import"./useDescription-E9xNjaIp.js";import"./inertValue-CO-gjUXk.js";import"./useHighlightSelectionDescription-BPoQK85a.js";import"./useUpdateEffect-DjwQlbax.js";import"./ListKeyboardDelegate-D0carfBq.js";import"./useHasTabbableChild-BoN-PDnK.js";import"./Checkbox-Yu1PhAd-.js";import"./Form-DOfclX9s.js";import"./check-D6WgzwrX.js";import"./useToggleState-Bj5xMUEw.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
