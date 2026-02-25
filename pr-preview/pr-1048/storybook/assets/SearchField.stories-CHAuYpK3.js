import{r as m,f as l,j as t}from"./iframe-DXvST5Z4.js";import{S as d}from"./SearchField-B_-OuZc7.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B3rkFIjv.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CUr3wY18.js";import"./useObjectRef-CtV_wNCy.js";import"./useLocalizedStringFormatter-CD11qPfL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ZxFNhkCT.js";import"./useFocusRing-C6PpwOyg.js";import"./useFocusable-CcTIrmj7.js";import"./index-BSKCIuFZ.js";import"./index-DpgVVg9m.js";import"./useFormValidation-IHOBEsDK.js";import"./useField-DQVM1v-x.js";import"./Button-CS5zO-gt.js";import"./utils-C7o3oNWQ.js";import"./Hidden-CWijdCRp.js";import"./number-DfkVkf0F.js";import"./useLabels-B-ai_w_R.js";import"./useButton-Ci2Hi0-B.js";import"./search-QqYx3YG3.js";import"./createLucideIcon-BQeZNnV0.js";import"./ClearButton-D5_HaYsl.js";import"./Button-CyUV4N7K.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DiZlQPZS.js";import"./VisuallyHidden-yddiJwiQ.js";import"./x-DPBUFtnb.js";import"./FieldError-Vgbr6qFP.js";import"./Text-DSf5Rh4t.js";import"./Text-6UKv5af0.js";import"./RSPContexts-BWCV_dnI.js";import"./Collection-DRMDRsvi.js";import"./CollectionBuilder-BWvoDEMo.js";import"./index-BmzGzd_D.js";import"./DragAndDrop-Cir9yvQd.js";import"./getScrollParent-Cb93IwoN.js";import"./scrollIntoView-DGoemtfW.js";import"./SelectionIndicator-2Q3RLIt1.js";import"./SelectionManager-ClVRgQnB.js";import"./useEvent-WiQdTJ77.js";import"./useDescription-eOAvzRvb.js";import"./inertValue-DZlC0QMQ.js";import"./useHighlightSelectionDescription-B5zN_3bt.js";import"./useUpdateEffect-D3UJzdxx.js";import"./ListKeyboardDelegate-7buxBpHF.js";import"./useHasTabbableChild-CcZlQBGQ.js";import"./Checkbox-H9N8T3ZG.js";import"./Form-COydQ7wv.js";import"./check-DHrQFPtg.js";import"./useToggleState-Dk1Jv8k3.js";const be={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,p]=m.useState(""),[s]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=s.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:p,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const we=["SimpleSearch"];export{i as SimpleSearch,we as __namedExportsOrder,be as default};
